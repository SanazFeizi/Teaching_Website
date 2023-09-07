function showStudentDetails(name) {
  var studentDetails = getStudentDetails(name); 
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
  if (name === "Hannah Allocco") {
    return `
    <h2>${name}</h2>
    <p>Major: Painting and Graphic Design  </p>
    <p>Hobbies: Embroidery, drawing, film photography, teaching, exercising, hanging out 
    with friends, and playing violin  
    </p>
    <p>I work as an art teacher in Hillsborough in my freetime :) </P>
    `;
  } else if (name === "Esteban Arias") {
    return `
    <h2>${name}</h2>
    <p>Major: Design </p>
    <p>Hobbies: Reading, playing games </p>
   
    `;
  } else if (name === "Jean Cirincione") {
    return `
    <h2>${name}</h2>
    <p>Major: Graphic Design</p>
    <p>Hobbies: Painting </p>
    <p>Most of my personal work is abstract, and I like lots of color!</P>
    `;
  } 
  else if (name === "Matthew Cruz") {
    return `
    <h2>${name}</h2>
    <p>Major: Photo/Design </p>
    <p>Hobbies: Playing Music, Watching Movies, and Going to Concerts (Hot Dress* shows)</p>
    <p> I’m Asian American and I am the first generation to attend college in my family.<br>
    <br> 
    *a band
    </P>
    `;
  }
  else if (name === "Brandon Fried") {
    return `
    <h2>${name}</h2>
    <p>Major: Drawing and Design </p>
    <p>Hobbies: Playing Drums, Watching Movies, Character Design </p>
    <p>I make album covers for my friends' band.</P>
    `;
  }
  else if (name === "Pooja Gandhi") {
    return `
    <h2>${name}</h2>
    <p>Major: Design</p>
    <p>Hobbies: Painting  </p>
    
    `;
  }
  else if (name === "Dara Jackson") {
    return `
    <h2>${name}</h2>
    <p>Major: </p>
    <p>Hobbies: </p>
    <p> Add anything that you like to tell more about yourself </P>
    `;
  }
  else if (name === "Gabrielle Kim") {
    return `
    <h2>${name}</h2>
    <p>Major: Drawing Concentration </p>
    <p>Hobbies: Baking pies and dancing. </p>
    <p>I enjoy digital illustration the most and I’m a webtoon creator.</P>
    `;
  }
  else if (name === "Paige Kurzawa") {
    return `
    <h2>${name}</h2>
    <p>Major: Photography and Design</p>
    <p>Hobbies: working out, reading, spending time with friends. </p>
  
    `;
  }
  else if (name === "Elaina Phillips") {
    return `
    <h2>${name}</h2>
    <p>Major: Design, Painting, Drawing</p>
    <p>Hobbies: I enjoy spending time outside, creating illustrations and trying new things. 
    I also appreciate meeting new people and running. </p>
    <p> I like to create stories associated with the things I create. Recently I’ve been 
    messing with stop motion animation.</P>
    `;
  }
  else if (name === "Andrew Petrocelli") {
    return `
    <h2>${name}</h2>
    <p>Major: Design and Photography</p>
    <p>Hobbies: Write music, play video games, make things… </p>
    <p> I got a haircut 3 weeks ago.</P>
    `;
  }
  else if (name === "Yiji Wang") {
    return `
    <h2>${name}</h2>
    <p>Major: Design and Print</p>
    <p>Hobbies: Drawing, photography, painting…</p>
  
    `;
  }
  else if (name === "Sammi Wu") {
    return `
    <h2>${name}</h2>
    <p>Major: Design and Print </p>
    <p>Hobbies: drawing, playing music, cooking! </p>
    
    `;
  }
  else if (name === "Maggie Zheng") {
    return `
    <h2>${name}</h2>
    <p>Major: Painting and Design </p>
    <p>Hobbies: Playing guitar, hanging out with friends, thrifting, listening to music…
    </p>
    <p>I’m Asian American and I’m the first generation to attend college in my family.</P>
    `;
  }

  else {
    return "<p>No details available for this student.</p>";
  }
}