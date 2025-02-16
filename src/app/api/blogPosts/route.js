// pages/api/blogPosts.js

export default function handler(req, res) {
    // Simulating blog posts as static data. You can replace this with a database query.
    const posts = [
      {
        id: 1,
        title: "5 fejl, der ødelægger din hjemmesides SEO",
        description:
          "Lær, hvordan du undgår de mest almindelige SEO-fejl.",
        date: "24.02.2024",
      },
      {
        id: 2,
        title: "Hvordan man optimerer billeder til webdesign",
        description: "Se hvordan du kan optimere billeder på din hjemmeside.",
        date: "25.02.2024",
      },
      {
        id: 3,
        title: "Bedste praksis for webdesign i 2024",
        description: "Lær om de nyeste tendenser i webdesign.",
        date: "26.02.2024",
      },
    ];
  
    // Return blog posts as a JSON response
    res.status(200).json(posts);
  }
  