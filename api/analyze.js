export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'No image provided' });
  }

  try {
    // Tue sekä JPEG että PNG ja muut formaatit
    const mimeMatch = image.match(/^data:(image\/\w+);base64,/);
    const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');

    if (!base64Data || base64Data.length < 100) {
      return res.status(400).json({ error: 'Invalid image data' });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              {
                text: 'Analysoi tämä ruoka-annos suomeksi. Listaa kaikki tunnistamasi ruoka-aineet ja arvioi niiden kalorimäärä. Vastaa VAIN tässä muodossa, yksi rivi per ruoka-aine: "ruoka määrä g: X kcal". Esimerkki: kana 150 g: 248 kcal. Ei muuta tekstiä, ei selityksiä.'
              },
              {
                inline_data: {
                  mime_type: mimeType,
                  data: base64Data
                }
              }
            ]
          }]
        })
      }
    );

    if (!response.ok) {
      const errData = await response.json();
      console.error('Gemini error:', JSON.stringify(errData));
      return res.status(500).json({ error: 'Gemini API error', details: errData });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!text) {
      return res.status(500).json({ error: 'Empty response from Gemini' });
    }

    return res.status(200).json({ result: text.trim() });

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ error: 'Analyysi epäonnistui', message: error.message });
  }
}
