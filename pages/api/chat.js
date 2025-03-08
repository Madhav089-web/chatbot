
import { model} from "@/components/chat-message";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const result = await model.generateContent(prompt);
      // const geminiResponse = await fetch('https://gemini-api-url.com/travel', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `AIzaSyCDbeMNtyg69xpvCyD_A2ycTL3IHMTc3yA`
      //   },
      //   body: JSON.stringify({ query: message })
      // });

      // const geminiData = await geminiResponse.json();
      // const result = await chatSession.sendMessage(message);


      // const reply = `
      //   ✅ Best option: ${geminiData.destination} (${geminiData.total_cost})
      //   ✈️ Flights: ${geminiData.breakdown.flights}
      //   🏨 Stay: ${geminiData.breakdown.hotel}
      //   🍽️ Food: ${geminiData.breakdown.food}
      //   🚗 Local Transport: ${geminiData.breakdown.local_transport}
        
      //   💡 Alternative Options:
      //   - ${geminiData.alternatives[0].destination} (${geminiData.alternatives[0].total_cost})
      //   - ${geminiData.alternatives[1].destination} (${geminiData.alternatives[1].total_cost})
      // `;

      res.status(200).json({ reply:result});
    } catch (error) {
      res.status(500).json({ reply: 'Sorry, something went wrong. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}