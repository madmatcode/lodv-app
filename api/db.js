export default async function handler(req, res) {
    const { binId } = req.query; 
    const accessKey = process.env.DB_ACCESS_KEY;
  
    if (!binId) {
      return res.status(400).json({ error: 'Missing binId parameter' });
    }
  
    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: 'GET',
        headers: {
          'X-Access-Key': accessKey, 
        },
      });
  
      if (!response.ok) {
        throw new Error(`JSONBin error: ${response.statusText}`);
      }
  
      const data = await response.json();
      res.status(200).json(data); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }