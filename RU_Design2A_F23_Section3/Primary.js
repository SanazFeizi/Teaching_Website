function showStudentDetails(name) {
  var studentDetails = getStudentDetails(name); // You need to implement this function
  var modal = document.getElementById("studentModal");
  var studentDetailsElement = document.getElementById("studentDetails");

  studentDetailsElement.innerHTML = studentDetails;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("studentModal");
  modal.style.display = "none";
}

function getStudentDetails(name) {
  if (name === "Yasmeen Allafi") {
    return `
    <h2>${name}</h2>
    <p>Major: Design  </p>
    <p>Hobbies: drawing, thrifting, doing nails, going to museums.  </p>
    <p> I’m a transfer student, this is my first semester here.  </P>
    `;
  } else if (name === "Lizzie Carlisle") {
    return `
    <h2>${name}</h2>
    <p>Major: design</p>
    <p>Hobbies:painting, drawing, guitar </p>
   
    `;
  } else if (name === "Shan Chen") {
    return `
    <h2>${name}</h2>
    <p>Major:  Design & Photography </p>
    <p>Hobbies: Reading, cooking, painting, going on runs </p>
    
    `;
  } 
  else if (name === "Anthony Crimaldi") {
    return `
    <h2>${name}</h2>
    <p>Major: Design/Photo</p>
    <p>Hobbies: creating, sports, video games</p>
    <p>Chili’s is my favorite restaurant.</P>
    `;
  }
  else if (name === "Rosa Gomez") {
    return `
    <h2>${name}</h2>
    <p>Major: Design with a concentration in Design </p>
    <p>Hobbies: I like going on walks, hiking, meeting new people </p>
    <p>I love Trader Joe’s Ube Mochi and I like working with the teenagers and 
    the elderly from my community. Pink is also my favorite color at the moment, 
    but it changes every month or so. </P>
    `;
  }
  else if (name === "Jarod Hickman") {
    return `
    <h2>${name}</h2>
    <p>Major:Design</p>
    <p>Hobbies: Art, exercise, skateboarding, video games </p>
    
    `;
  }
  else if (name === "Grace Inacio") {
    return `
    <h2>${name}</h2>
    <p>Major: Design/Photography </p>
    <p>Hobbies:  crocheting, photography, designing, reading </p>
    <p> I love going shopping and hanging out with my friends. </P>
    `;
  }
  else if (name === "Elise Jennings") {
    return `
    <h2>${name}</h2>
    <p>Major:  printmaking/design or painting </p>
    <p>Hobbies: painting, seeing live music, book making, selling art locally </p>
    <p> I really enjoy the freedom that comes with  most forms of art, 
    I would love to apply that to design this year :)</P>
    `;
  }
  else if (name === "Hailey Kerlin") {
    return `
    <h2>${name}</h2>
    <p>Major: Design/media (still need to declare) </p>
    <p>Hobbies: Going for walks, watching my favorite shows, & spending time with friends/family. </p>
    <p> I am a social media manager for my sorority, 
    I am a virgo, and I have a collection of items 
    that have the moon on them.  </P>
    `;
  }
  else if (name === "Emily Lim") {
    return `
    <h2>${name}</h2>
   
    `;
  }
  else if (name === "Sarah Lopez") {
    return `
    <h2>${name}</h2>
    <p>Major:  Design/Painting </p>
    <p>Hobbies: Mushroom Foraging, Camping, Cooking, 
    Video Games (Disco Elysium, Celeste, Immortality, 
    Night in the Woods, Hollow Knight…) </p>
    <p>I am a new transfer student here and I’m looking forward 
    to getting to know the school and the people.</P>
    `;
  }
  else if (name === "Nicole Machnowski") {
    return `
    <h2>${name}</h2>
    <p>Major:  Design </p>
    <p>Hobbies:  Dungeons & Dragons, gardening, drawing, 
    playing video games, spending time with my friends 
    and family along with my two dogs.</p>
    <p> I’ve lost count of how many dice sets I own for D&D, 
    but it does not stop me from buying more. 
    Also I love cooking and baking!</P>
    `;
  }
  else if (name === "Stayashey Castillo") {
    return `
    <h2>${name}</h2>
    <p>Major: Design and Painting </p>
    <p>Hobbies: Drawing, ceramics, making prints, going to different coffee shops and food places, </p>
    <p>I really like bringing in different art forms together and playing 
    with mixed media so I hope to do that this year</P>
    `;
  }
  else if (name === "Analyssa Smith") {
    return `
    <h2>${name}</h2>
    <p>Major:  Design and Photography </p>
    <p>Hobbies: I like to go thrifting and upcycle clothes, 
    I like taking analogue photography the best, I collect 
    crystals and books and I like to crochet and make things. </p>
    <p> I like working my photography into my designs. 
    I think it adds a really nice personal touch and I 
    hope to own a studio in the future where I design cards, 
    packaging and books and take studio photos! </P>
    `;
  }
  else if (name === "Franky Tan") {
    return `
    <h2>${name}</h2>
    <p>Major: Design & Media </p>
    <p>Hobbies:  Sewing, crocheting, thrifting </p>
    
    `;
  }

  else {
    return "<p>No details available for this student.</p>";
  }
}