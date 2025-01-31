export const artifact = [
  {
    title: "HAM Radio",
    info: [
      { id: 1,
        name: "WHAT IS AMATEUR RADIO?",
        description: "Amateur Radio (Ham Radio) is an international hobby on designated frequencies enabling communication via various methods, e.g. Morse Code, Voice, and Data. Call signs such as K3NEM (our station call sign) are unique to each licensed ham or club. Call sign prefixes vary by country."
      },
      { id: 2,
        name: "WHO CAN BE AN AMATEUR RADIO OPERATOR (Ham)?",
        description: "Folks of any age in the US are eligible to take the exams. Licenses are issued by each country and are granted in degrees of privilege. Morse Code proficiency is no longer required. If you can handle a cell phone, you are well on the way to becoming a ham!"
      },
      { id: 3,
        name: "WHAT MIGHT I DO IN HAM RADIO? ",
        description: "Many communicate over the air with local and far-away hams using voice, Morse Code, digital signals or even two-way television. Communication in emergency situations is a popular and important civic activity. One can learn to build, fix, and understand electronic devices (career opportunities)"
      },
      { id: 4,
        name: "EMERGENCY COMMUNICATIONS",
        description: "When telephone systems are down, ham radio still gets through. Radio amateurs work with government agencies for communications. We pass traffic datagrams—like Western Union messages via on-air networks of hams. Photo is of ARRL Field Day, an annual emergency preparedness event."
      },
      { id: 5,
        name: "AMATEUR RADIO CLUB OF THE NATIONAL ELECTRONICS MUSEUM",
        description: "This is us! We are here to help get you licensed and on the air. Our Thursday evening classes by Zoom for licenses classes and operating principles are internationally attended. We host interesting weeknight club meetings and weekend on-air events. We support the museum with tour guides and volunteers. Our club ham station is available.",
        contact: {
          email: "contact@k3nem.org",
          web: "www.k3nem.org/"
        }
      },
    ]
  },
  {
    title: "Voltage and Current",
    info: [{ id: 1, text: "" }],
    description: [
      "Voltage is sort of like electrical pressure. A current is a flow of electric charge. It is best to think of it like this: voltage CAUSES electric current, just like water pressure causes water to flow. ",

      "Voltage is the invisible energy that urges electricity to move from one place to another. Voltage and Current work hand in hand. Voltage provides the push, while Current keeps the electricity flowing. Together, they create the energy that powers our gadgets and lights up our world.",
    ],
    impact:
      "Understanding Voltage and Current helps engineers and scientists design safer and more efficient electrical systems. From the tiniest circuits to the grandest power grids, these concepts are crucial for creating technology that works reliably and safely.",
    directions: {
      title: "How it Works",
      steps: [
        { id: 1, step: "Turn knob clockwise and watch the meters." },
        {
          id: 2,
          step: "Flip the switch and turn on light bulb while watching meters.",
        },
        { id: 3, step: "Rotate the knob to change voltage." },
      ],
    },
    watch:
      "Turning the knob allows voltage to change as the voltmeter shows. The meter remains still because no current is being used until you flip the switch. When you flip the switch, the ammeter shows the current being drawn by the bulb as you twist the knob. The amount of current drawn varies, changing the bulb's brightness.",
    how: "By flipping the switch, you close the circuit and allow the current to flow in the circuit`s path. Without the force of the voltage and the path of a circuit, current will not flow. Voltage pushes current, forcing it to flow through a closed circuit and light the bulb.",
  },
  {
    title: "The Marconi Magnetic Detector",
    info: [
      {
        id: 1,
        title: "Inventor",
        text: "Guglielmo Marconi"
      },
      {
        id: 2,
        title: "Year of Invention",
        text: "1896",
      },
      {
        id: 3,
        title: "Key Feature",
        text: "Magnetic field sensor"
      },
      {
        id: 4,
        title: "Impact",
        text: "Foundation for modern wireless tech"
      }
    ],
    description: [
      "In the late 19th century, a young inventor named Guglielmo Marconi developed the Marconi Magnetic Detector, a device that could detect magnetic fields in radio waves. These are invisible signals that make wireless communication possible. These signals could be transmitted long distances without wires and received and became the starting point for wireless communication.",
    ],

    impact:
      "The Marconi Magnetic Detector is a critical building block that started the journey to global connectivity. This invention changed the game of communication, shaping our modern world. This discovery laid the foundation for future wireless innovations like radios, televisions, the internet, smartphones and Wi-Fi.",
    timeline: {
      title: "History of Wireless communication ",

      dates: [
        { id: 1, date: "1890s", text: "First Wireless Communication " },

        { id: 2, date: "1900s", text: "First Radio Broadcast " },

        { id: 3, date: "1920s", text: "First Commercial Radio " },

        {
          id: 4,
          date: "1930s", text: "Radar technology, Television Broadcasting",
        },

        { id: 5, date: "1940s", text: "Quality Radio Services" },

        { id: 6, date: "1950s", text: "First Satellites, the Space program " },

        { id: 7, date: "1970s", text: "Mobile networks, GPS " },

        { id: 8, date: "1980s", text: "First-generation mobile networks " },

        {
          id: 9,
          date: "1990s", text: "Second-generation mobile networks, Wi-Fi ",
        },

        { id: 10, date: "2000s", text: "Satellite internet, 3G Networks " },

        { id: 11, date: "2010s", text: "LTE advanced, 5G network" },
      ],
    },
    directions: {
      title: "How it Works",
      steps: [
        { id: 1, step: "Listen on the telephone receiver." },
        {
          id: 2,
          step: "Slowly turn the knob on the front clockwise.",
        },
        {
          id: 3,
          step: "The radio station is detected only when the wire band is moving. It stops when the wire band stops.",
        },
        {
          id: 4,
          step: "See how slowly you can turn the knob and still hear the radio.",
        },
      ],
    },
    watch: "",
    how: "Maggie” moves the iron wire band through the radio frequency coil as you turn the knob. The detector functions by capturing radio waves, which are invisible signals traveling through the air. This device utilized a magnetic field to intercept these waves. When the radio waves interacted with the magnetic field within the detector, they caused fluctuations, creating tiny electrical currents. These currents were then amplified and converted into audible sounds, allowing people to hear the messages carried by the radio waves. The Marconi Magnetic Detector operates on the principles of electromagnetic induction. It detects radio waves by utilizing a coherer, which is a component sensitive to electromagnetic waves.  It operates by utilizing an antenna to receive radio waves, a coherer to detect and respond to these waves by altering its electrical resistance, and subsequent circuitry that interprets this change to generate a discernible output, usually an audible signal. This pioneering technology laid the foundation for wireless communication systems we use today. ",
  },

  {
    title: "Faraday's Experiment: Electricity and Magnetism",
    info: [
      {
        id: 1,
        text: "Inventor: Michael Faraday ",
      },
      {
        id: 2,
        text: "Year of Invention: 1831 ",
      },
      {
        id: 3,
        text: "Key Feature: Relationship between electricity and magnetism",
      },
      {
        id: 4,
        text: "Impact: Foundation for modern electric power sources",
      },
    ],
    description: [
      "Michael Faraday, a scientist from the 19th century, made discoveries changed the way we understand electricity and magnetism. ",

      "Faraday conducted a groundbreaking experiment in 1831 that showed how electricity and magnetism are connected. He discovered that when a magnet moves near a wire, it creates an electric current. This discovery laid the foundation for the modern technology we use today. ",

      "When Michael Faraday made his discovery of electromagnetic induction, he hypothesized that a changing magnetic field is necessary to induce a current in a nearby circuit. To test his hypothesis he made a coil by wrapping a paper cylinder with wire. Gently tilt the tube so the magnet slides down the tube and see if you can generate a tiny electric current. ",

      "The strength of an electromagnet depends on the number of windings in the coil and the strength of the electric current. More windings and stronger current produce more intense magnetic fields.",
    ],
    impact:
      "Faraday's experiment was a crucial step in understanding the relationship between electricity and magnetism. This breakthrough led to the development of generators, which produce the electricity that powers our homes, schools, and gadgets. Without Faraday's discoveries, many of the electronic devices we rely on today might not exist.",
    directions: {
      title: "",
      steps: [
        {
          id: 1,
          step: "Gently tilt the tube so the magnet slides down the tube.  ",
        },
        {
          id: 2,
          step: "Watch the meter show the presence of electric current as the magnet slides past the wire coil.",
        },
        {
          id: 3,
          step: "",
        },
        {
          id: 4,
          step: "",
        },
      ],
    },
    watch: "",
    how: "This phenomenon occurs due to electromagnetic induction, a principle discovered by Faraday. It demonstrates that a changing magnetic field induces an electric current in a conductor. The key factor here is the relative motion between the magnet and the wire, causing the magnetic flux through the coil to change.  Magnetic flux is a measure of the magnitude of a magnetic field passing through a given area.",
  },

  {
    title: "Oersted's Experiment",
    info: [
      {
        id: 1,
        text: "Discoverer: Hans Christian Oersted",
      },
      {
        id: 2,
        text: "Date of Discovery: 1820",
      },
      {
        id: 3,
        text: "Experiment Type: Observing the interaction between electricity and magnetism.",
      },
      {
        id: 4,
        text: "Key Discovery: Flowing electricity through a wire caused a nearby magnetic compass needle to move.",
      },
    ],
    description: [
      "In the early 19th century, Oersted embarked on an experiment that would change our understanding of nature. Oersted's curiosity led him to an extraordinary experiment. With a simple setup, he observed the interaction between electricity and magnetism. He noticed that when an electric current flowed through a wire, a nearby magnetic compass needle moved. This unexpected interaction between electricity and magnetism was the spark that lit up a revolution in science.",
    ],
    impact:
      "Oersted's discovery was the key that unlocked the mysterious relationship between electricity and magnetism. This revelation laid the groundwork for the development of electric motors, generators, and the modern technology we rely on today.",
    directions: {
      title: "How it Works",
      steps: [
        {
          id: 1,
          step: "Look at the direction of the compasses; they are all pointing north.",
        },
        {
          id: 2,
          step: "Flip the switch both ways.",
        },
        {
          id: 3,
          step: "Watch the compass needles move as you flip the switch.",
        },
        {
          id: 4,
          step: "They are showing the direction of the magnetic field as current is applied to the copper wire.",
        },
      ],
    },
    watch: "",
    how: "A compass needle points to a magnetic force and typically to the Earth’s north magnetic pole. When you flip the switch, you allow current to flow in one direction from the battery. The magnetic field created by the electric current through the wrapped wire coil created its own magnetic field. The compass needles line up with the magnetic field around the wire. When you flip the switch the other way, the compass needles reverse because the direction of the current has been reversed.",
  },

  {
    title: "Human Battery",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
      {
        id: 4,
        text: "",
      },
    ],
    description: [
      "When you place one hand on the copper plate and the other hand on the aluminum plate, the current would flow through your body from one plate to the other.",

      "",

      "",

      "",
    ],
    impact:
      "We can create electricity by chemical action. By closing circuits, we allow that energy to flow. You have provided the conducting fluid for this battery, so the electricity is flowing through you!",
    directions: {
      title: "Try This:",
      steps: [
        {
          id: 1,
          step: "Place one hand on each plate",
        },
        {
          id: 2,
          step: "Repeat with a friend: hold hands, and then each person place their free hand on one of the plates. Try it again with more than two people “in the loop”.",
        },
      ],
    },
    watch: "Watch the meter. It shows constant current flow in one direction.",
    how: "When you touch the metal plates, the moisture on your hands acts as the battery`s saline conducting electrolytes. The electrolytes react with the copper and aluminum plates. It takes the negatively charged electrons away from the copper plate, leaving the positive charges behind. It then gives electrons to the aluminum plate, causing it to become negatively charged. These electrons pass through the meter as they return to the copper plate. In a simple circuit like this, the direction of current flow is determined by the potential difference between the two plates. When you touch both plates simultaneously, you complete the circuit, allowing the flow of electrons from the higher potential (copper plate) to the lower potential (aluminum plate) through your body.",
  },

  {
    title: "Jumping Wires",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
      {
        id: 4,
        text: "",
      },
    ],
    description: [
      "Long ago, scientists wondered about invisible forces around us. One such force, called electricity, fascinated them. They discovered it could make things move and glow. But they didn't know how to create it.",

      "In the 1800s, a brilliant scientist named Michael Faraday became curious about electricity and magnets. He discovered something incredible - when magnets move near a wire, they create electricity. Using Faraday's discovery, engineers built the first electric generator. Imagine a machine that turns the power of spinning magnets into electricity. This invention changed the world forever.",

      "",

      "",
    ],
    impact: [
      "Michael Faraday`s experiments with electromagnetism led him to invent the first electrical generator in 1831. Using the principles demonstrated here, the generator converted the mechanical energy of the rotation into electrical energy. The power of the motor depends on the strength of the magnetic field, the number of wires and the amount of current running through the wires.",

      "Understanding electromagnetism, the relationship between electricity and magnets, led to the creation of power plants. These plants generate electricity for our homes, schools, and cities. Thanks to this invention, we can light up our homes, power our gadgets, and explore amazing things using electricity.",
    ],
    directions: {
      title: "How It Works",
      steps: [
        {
          id: 1,
          step: "Push button 1",
        },
        {
          id: 2,
          step: "Push button 2",
        },
      ],
    },
    watch: "",
    how: "Notice that the wire between two magnets jumps. The wire moves because the magnetic field created by electric current interacts with the permanent magnetic field.",
    what: {
      title: "What's Going On?",
      list: [
        {
          id: 1,
          info: "Movement of the Magnet: In Faraday's experiment, when a magnet is moved in and out of a coil of wire (or vice versa), it causes the magnetic field around the coil to change.",
        },
        {
          id: 2,
          info: "Induced Current: This change in the magnetic field induces a flow of electrons or an electric current in the wire coil.",
        },
        {
          id: 3,
          info: "Direction of Current: The direction of the induced current depends on the direction of movement of the magnet and the coil.",
          tilt: [
            "Tilting to the right causes the induced current to flow in one direction.",
            "Tilting to the left causes the induced current to flow in the opposite direction.",
          ],
        },
        {
          id: 4,
          info: "Electricity Generation: The induced current in the wire can be used to power a circuit or generate electricity.",
        },
      ],
    },
  },

  {
    title: "Jacob's Ladder Experiment: Demonstrating Electrical Principles",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: [
      "Jacob's Ladder Experiment is a demonstration of electricity's power to create mesmerizing arcs of light. It consists of two vertical conductors, typically made of metal rods or wires, placed in a V-shape with a small gap between them at the bottom. ",

      "",

      "",

      "",
    ],
    impact:
      "The Jacob's Ladder Experiment is not only a fascinating visual spectacle but also serves as a fundamental demonstration of electrical principles. It highlights the behavior of electricity in the air and the effects of high voltage on ionization and conductivity. This experiment has been crucial in advancing our understanding of electrical phenomena and has paved the way for numerous technological innovations.",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "Push the button and hold it.",
        },
        {
          id: 2,
          step: "Watch the two tall wires.",
        },
      ],
    },
    watch: "",
    how: "When a high voltage is applied to the two conductors, electricity flows through the air in the gap between them, ionizing the air and creating a conductive path. The intense heat generated by this electrical discharge causes the air to expand rapidly, pushing the arc upwards. As the arc climbs, it cools down, and the air becomes less ionized, eventually breaking the circuit and extinguishing the arc. The process repeats, creating a mesmerizing display resembling a ladder climbing upwards.  Witnessing the arcing discharge and understanding its underlying principles provides valuable insights into the world of science and engineering.",
  },

  {
    title: "Static Electricity: A Shocking Discovery",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: [
      "Static electricity is a form of electricity resulting from the imbalance between positive and negative charges within a material that occurs when electrons (the negatively charged particles in an atom) move from one material to another. If the electron-receiving material is either isolated or not an electrical conductor, it tends to hold on to the electrons, resulting in a buildup of electric charge. Since this charge is not moving, it is referred to as static electricity. When conditions allow the built-up charge to flow, the surplus of static electricity is discharged, and it becomes current electricity. ",
      "Static Electricity is a phenomenon that occurs when certain materials rub against each other, causing electrons to move from one surface to another. This movement creates an imbalance of electric charges, leading to the buildup of static electricity. ",
      "Thunderstorms are nature's electrical generators, producing immense static charges as water droplets and ice particles collide within clouds. When the buildup of static electricity becomes too great, it seeks a path to the ground, resulting in lightning strikes. These bolts of electricity can reach temperatures hotter than the surface of the sun and unleash destructive power upon anything in their path. ",
      "",
    ],
    impact: [
      "The discovery of static electricity has had a profound impact on technology and everyday life. From the invention of the telegraph to the development of modern electronics, static electricity plays a crucial role in powering our devices and facilitating communication.",

      "In the 18th century, Benjamin Franklin famously conducted his kite experiment, proving that lightning is a form of electricity. This groundbreaking discovery led to the invention of the lightning rod—a device designed to protect buildings and ships from lightning strikes by safely redirecting the electrical charge to the ground. Franklin's invention revolutionized our understanding of lightning and paved the way for modern lightning protection systems.",
    ],
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "Push and hold the button",
        },
        {
          id: 2,
          step: "Watch the electric sparks at the top",
        },
      ],
    },
    watch: "",
    how: "The machine separates positive and negative charges to build up a lot of potential energy. Eventually, a spark is released which uses up almost all of the energy and balances the two sides.",
  },

  {
    title: "Polarization Experiment",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: [
      "This experiment demonstrates how filters allow electromagnetic waves oscillating in a certain direction to pass through while blocking others, showcasing the effects of polarization on electromagnetic waves.  With polarized sunglasses, the filter creates vertical openings for light. Only light rays that approach your eyes vertically can fit through those openings. The lenses block all the horizontal light waves bouncing off a smooth pond or a shiny car hood, for instance.  This is a similar concept to polarization on electromagnetic waves. ",
      "",
      "",
      "",
    ],
    impact:
      "Polarization is what lets the mesh screen in your microwave oven door block hazardous energy from escaping. The wires of the mesh are vertical and horizontal blocking waves moving in either direction. ",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "Press the red button.",
        },
        {
          id: 2,
          step: "Slowly rotate the screen wheel while watching the two meters. The left horn is transmitting, and the right horn is receiving.  ",
        },
      ],
    },
    watch: "",
    how: "Look at the meters to see how much electromagnetic energy is being transmitted and how much is received. Do the amounts change as the screen wheel moves? The open wire screen can reflect or transmit electromagnetic waves which are vertically polarized. Some waves pass through the spaces between the wires, while other waves are reflected back off the wires. For vertically polarized waves, the screen blocks most effectively when its wires are also vertical. ",
  },

  {
    title: "Why do Microwaves Have Turntables?",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: [
      "Microwave ovens generate electromagnetic waves (microwaves) that heat food by exciting water molecules within the food. Microwaves are invisible, so you can't see them inside a microwave oven, but their presence can be detected with neon lamps. The changing electromagnetic field from the microwaves will make charged particles move, and so the electrons in the metal legs will move creating current. This current makes the lamps glow.  The distribution of these waves inside the microwave tends to be uneven so a turntable helps rotate the food, ensuring that all parts of the dish receive relatively equal exposure to the microwaves. This results in more consistent and even cooking.",
    ],
    impact:
      "Food in the oven absorbs microwave energy. The turntable rotates food through the high and low field intensities. Thorough cooking is the result. ",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "Press the red button to the left of the microwave oven.",
        },
      ],
    },
    how: "Watch the neon lights on the turntable inside the microwave. They turn on and off and change in brightness as their position in the oven changes.  This is a visual demonstration of the inconsistency of the microwave energy. The distribution of microwave energy is inconsistent. This causes varying field intensities, or hot and cold spots in the oven.  A turntable is employed to reduce the likelihood of hot spots or cold spots in your food. ",
  },

  {
    title: "Telegraph Machine - Connecting the World",
    info: [
      {
        id: 1,
        title: "Name",
        text: "Name: Telegraph Machine",
      },
      {
        id: 2,
        title: "Inventor",
        text: "Inventor: Samuel Morse and Alfred Vail ",
      },
      {
        id: 3,
        title: "Year of Invention",
        text: "Year of Invention: 1837 ",
      },
      {
        id: 4,
        title: "Speed",
        text: "Speed: Messages transmitted in seconds ",
      },
      {
        id: 5,
        title: "Language",
        text: "Language: Morse Code (Dots and Dashes)",
      },
      {
        id: 6,
        title: "Global Connection",
        text: "Global Connections: Linked continents, changing the way we share information worldwide ",
      },
    ],
    description: [
      "The telegraph transformed communication by sending messages long distance through wires, bridging gaps between people and places. Using Morse code, a series of dots and dashes, the telegraph connected the world faster than ever before. ",
      "",
      "",
      "",
    ],
    impact:
      "Before the telegraph, communication was slow, and important information often arrived too late. With telegraph wires stretching across continents, news could be delivered quickly, which was especially important for businesses, governments, and families waiting for important updates. The telegraph was not just a device; it was a bridge between people and places. It played a significant role in the construction of the transcontinental railroad. Its ability to transmit messages quickly and accurately over long distances played a vital role in the successful completion of this monumental engineering project, connecting the East and West coasts of the United States and making it easier to coordinate work and travel across the country. ",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "Push on the big black button on the telegraph key.",
        },
        {
          id: 2,
          step: "Hold then release for dashes, press and quickly release for dots.",
        },
        {
          id: 3,
          step: "Listen for the code from the sounder.",
        },
      ],
    },
    telegraphStation: {
      title: "Telegraph Station",
      instructions: [
        {
          id: 1,
          steps:"Push on the big black button on the telegraph key"
        },
        {
          id: 2,
          steps:"Hold then release for dashes, press and quickly release for dots." 
        },
        {
          id: 3,
          steps: "Listen for the code from the sounder."
        }
      ]
    },
    how: [
      "The magnetic qualities of electricity help to send the current along the telegraph wire. The special code of dots and dashes called “Morse Code” uses pulses of current to send messages. ",
      "This was the earliest form of instant long-distance communication. Messages could be sent by tapping out a special code created by Samuel Morse on a telegraph key. Each letter of the alphabet has its own special sequence of dots and dashes. The name telegraph is derived from the word “tele” meaning far off and the word “graph” meaning to write. ",
      "",
    ],
  },
  {
    title: "The Evolution of Sound",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: ["", "", "", ""],
    impact: "",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
  },
  {
    title: "First Broadcast",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: ["", "", "", ""],
    impact: "",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
  },
  {
    title: "Manual Turbine",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: ["", "", "", ""],
    impact: "",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
  },
  {
    title: "Theramin",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: ["", "", "", ""],
    impact: "",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
  },
  {
    title: "Electromagnetic Radio Waves",
    info: [
      {
        id: 1,
        text: "Name: Electromagnetic Radio Waves",
      },
      {
        id: 2,
        text: "Discovered: In the late 19th century by Heinrich Hertz",
      },
      {
        id: 3,
        text: "Key Characteristics: Invisible, travel at the speed of light, used in communication technologies",
      },
      {
        id: 4,
        text: "Impact: Revolutionized communication, enabled wireless technologies",
      },
    ],
    description: [
      "Electromagnetic Radio Waves are the invisible force that connects us across vast distances.  Like a symphony of frequencies, these waves carry information, music and voices through the air, shaping our modern world in ways we often take for granted.",
      "In the late 19th century, Heinrich Hertz conducted experiments that confirmed the existence of electromagnetic waves predicted by James Clerk Maxwell's equations.  Hertz's work laid the foundation for our understanding of radio waves and their applications.",
      "",
      "",
    ],
    impact:
      "In the early days, radio waves were primarily used for telegraphy, enabling long-distance communication through Morse code.  However, with advancements in technology, radio waves became the backbone of modern communication systems, facilitating radio broadcasting, television transmission, and later, wireless internet and cellular networks. Unlike tangible objects, radio waves are invisible to the human eye. Yet, they permeate our surroundings, carrying information through the air effortlessly. Whether it's the music streaming from your smartphone or the satellite signals guiding airplanes, radio waves silently orchestrate our interconnected world.",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "Generation: Radio waves are generated when an alternating current flows through an antenna.  This alternating current creates oscillating electric and magnetic fields around the antenna, which together form the radio wave.",
        },
        {
          id: 2,
          step: "Propagation: Once generated, radio waves travel through the air (or other mediums) at the speed of light.  They propagate in all directions, much like ripples on the surface of a pond when you drop a stone.",
        },
        {
          id: 3,
          step: "Transmission: Radio waves carry energy and information as they propagate.  For example, in radio broadcasting, a transmitter converts sound waves into electrical signals, which are then used to modulate the radio waves.  This modulation encodes the sound information onto the radio wave, allowing it to carry music, speech, or data over long distances.",
        },
        {
          id: 4,
          step: "Reception: When radio waves encounter an antenna tuned to the same frequency, they induce a small alternating current in the antenna.  This current is then amplified and decoded by electronic circuits in a receiver device, such as a radio or a smartphone.  The original information encoded on the radio wave is reconstructed and outputted as sound, data, or images.",
        },
        {
          id: 5,
          step: "Interference and Regulation: Radio waves can be affected by various factors, such as atmospheric conditions, interference from other electronic devices, or obstacles in their path.  To ensure reliable communication, radio frequencies are carefully regulated by governments and international bodies to minimize interference and allocate specific frequency bands for different uses, such as broadcasting, aviation, or mobile communication.",
        },
      ],
    },
    how: "In electronic communication, bandwidth is the amount of information that is transmitted on an electromagnetic wave.  The more information in a transmission, the more frequencies it spreads across.  Since the frequency of a signal is measured in hertz (the number of cycles of change per second), a bandwidth is the difference in hertz between the highest frequency and the lowest frequency it uses.  Bandwidth is intimately linked to the efficiency, capacity, and quality of radio wave-based communication systems.  By managing bandwidth allocation and optimizing transmission parameters, engineers can design communication networks that deliver reliable, high-speed connectivity to users worldwide. Somewhere above you right now, a plane is broadcasting its location, speed and bearing on 1090 MHz.  A geostationary weather satellite 22 thousand miles from Earth is transmitting detailed weather maps on 1694.1 MHz.  A car driving by your home is transmitting a signal with the pressure readout of one of its tires at 315MHz.  A GPS satellite flying overhead at 8,000 miles per hour is pinging a signal to your phone at 1575.42 MHz .  A data buoy bobbing in the Atlantic ocean transmits sea temperature, wave height and wind speed readings to a NOAA satellite at 401 MHz.  On top of all that, every single mobile device and WiFi router near you blasts out everyone’s internet traffic through the air over radio waves.  All of these can occur simultaneously thanks to a very carefully regulated radio spectrum.  Licensed broadcasters may be assigned portions of the regionally available bandwidth so that their signals do not interfere with each other. The Federal Communication Commission (FCC) and the National Telecommunications and Information Administration (NTIA) share the task of managing the allotment of radio frequencies for U.S. airwaves.  The NTIA manages Federal all radio applications (including military uses), while the FCC manages everything else including state and local government, commercial and amateur radio use.",
  },
  {
    title: "Polarization Experiment",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: ["", "", "", ""],
    impact: "",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
  },
  {
    title: "Vacuum Tube",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: ["", "", "", ""],
    impact: "",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
  },
  {
    title: "",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: ["", "", "", ""],
    impact: "",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
  },
  {
    title: "",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: ["", "", "", ""],
    impact: "",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
  },
  {
    title: "",
    info: [
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
      {
        id: 3,
        text: "",
      },
    ],
    description: ["", "", "", ""],
    impact: "",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
  },
  {
    title:
      "The Van de Graaff Generator: Harnessing the Power of Static Electricity",
    info: [
      {
        id: 1,
        text: "Name: Van de Graaff Generator",
      },
      {
        id: 2,
        text: "Inventor: Robert J. Van de Graaff",
      },
      {
        id: 3,
        text: "Year: 1929",
      },
      {
        id: 4,
        text: "Purpose: Demonstrating static electricity",
      },
      {
        id: 5,
        text: "Fun Fact: The biggest Van de Graaff generator can make lightning-like sparks over 20 feet long",
      },
      {
        id: 6,
        text: "Impact: Helped in nuclear research and understanding atomic structures.",
      },
    ],
    description: [
      "The Van de Graaff Generator was invented by Robert J. Van de Graaff in 1929 to show how electric charges work.  By using a moving belt to build up electricity on the big metal dome, it teaches us about static electricity — something that’s all around us, but we usually don’t notice.",
      "",
      "",
      "",
    ],
    impact:
      "This generator helps scientists understand the forces that keep atoms together.  It was once used in laboratories to speed up particles for experiments in nuclear physics, helping us learn more about the universe and the building blocks of matter. Higher energy machines – In 1937, the Westinghouse Electric company built a 65 ft (20 m) machine, the Westinghouse Atom Smasher capable of generating 5 MeV in Forest Hills, Pennsylvania.  It marked the beginning of nuclear research for civilian applications.  It was decommissioned in 1958 and was partially demolished in 2015.",
    directions: {
      title: "How Does it Work?",
      steps: [
        {
          id: 1,
          step: "",
        },
        {
          id: 2,
          step: "",
        },
      ],
    },
    how: "",
    howGraaff: {
      title: "How does it Work?",
      info: [
        "Friction on the belt → Charges transfer to the dome → Charges jump to create sparks.",
        "The Van de Graaff generator works by building up and storing static electricity, which it transfers to other objects. Here’s how it does that:",
      ],
      list: [
        {
          id: 1,
          item: "The Belt.",
          description:
            "Inside the machine, there’s a rubber or fabric belt that moves continuously over rollers. As the belt moves, it rubs against the rollers, picking up tiny electric charges through a process called friction.",
        },
        {
          id: 2,
          item: "The Comb.",
          description:
            "As the belt moves, it passes by a comb (a metal strip with sharp points) near the base of the machine. The comb transfers the electric charges from the belt to the metal dome at the top of the generator.",
        },
        {
          id: 3,
          item: "The Dome.",
          description:
            "The dome is like a giant container for electric charges. As the charges build up, the dome becomes highly charged. This is static electricity, similar to what happens when you rub a balloon on your hair.",
        },
        {
          id: 4,
          item: "Sparks and Static.",
          description:
            "When the charges on the dome build up enough, they look for a way to escape.  If you bring a metal object (or even your hand) close to the dome, the charges jump through the air, creating a visible spark.  Sometimes, if you touch the dome, the charges move through you—making your hair stand on end.",
        },
      ],
    },
    try: {
      title: "Try this and Watch:",
      steps: [
        {
          id: 1,
          name: "Press and hold the button to turn it on.",
          text: "The Van de Graaff generator and let it build up charge. You will hear a faint humming sound, and after a few moments, the dome will begin to accumulate static electricity.",
        },
        {
          id: 2,
          name: "Witness the charge.",
          text: "Watch the sparks zap from rod to the metal dome. The hair will start to rise as the static electricity flows. The static electricity is repelling each strand of hair away from the others, creating the “crazy hair” effect. The fluorescent lights flicker, charing the bulbs. ",
        },
      ],
    },
  },
];
