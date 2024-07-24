export async function POST(req, res) {
    try {
      const data = await req.json();
      console.log('Received registration data:', data);
  
      // Process the incoming data from Zoho
      // Add any additional processing logic here
  
      res.status(200).json({ message: 'Webhook received successfully' });
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
  export default (req, res) => {
    if (req.method === 'POST') {
      return POST(req, res);
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };
  