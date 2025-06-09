const artifact = [
  {
    title: "Lui radio",
    info: [
      { id: 1,
        name: "Qu'est-ce que la radio amateur?",
        description: "Amateur Radio (Ham Radio) est un passe-temps international sur les fréquences désignées permettant une communication via diverses méthodes, par ex. Code Morse, voix et données. Des indications d'appel telles que K3NEM (notre signal d'appel de station) sont uniques à chaque jambon ou club agréé. Les préfixes d'appel varient selon le pays."
      },
      { id: 2,
        name: "Qui peut être un opérateur radio amateur (HAM)?",
        description: "Les gens de tout âge aux États-Unis sont éligibles pour passer les examens. Les licences sont délivrées par chaque pays et sont accordées en degrés de privilège. La maîtrise du code Morse n'est plus nécessaire. Si vous pouvez gérer un téléphone portable, vous êtes en bonne voie pour devenir un jambon!"
      },
      { id: 3,
        name: "Que puis-je faire à la radio amateur?",
        description: "Beaucoup communiquent au-dessus de l'air avec des jambons locaux et lointains en utilisant la voix, le code Morse, les signaux numériques ou même la télévision bidirectionnelle. La communication dans les situations d'urgence est une activité civique populaire et importante. On peut apprendre à construire, réparer et comprendre les appareils électroniques (opportunités de carrière)"
      },
      { id: 4,
        name: "Communications d'urgence",
        description: "Lorsque les systèmes téléphoniques sont en baisse, la radio amateur est toujours en train de passer. Les amateurs de radio travaillent avec les agences gouvernementales pour les communications. Nous passons des datagrammes de trafic - comme les messages de Western Union via des réseaux de jambons en plein air. La photo est de l'ARRL Field Day, un événement annuel de préparation aux urgences."
      },
      { id: 5,
        name: "Club de radio amateur du National Electronics Museum",
        description: "C'est nous! Nous sommes là pour vous aider à vous attribuer sous licence et à l'antenne. Nos cours du jeudi soir par Zoom pour les cours de licences et les principes d'exploitation sont assistés à l'international. Nous organisons des réunions intéressantes de club de semaine et des événements de week-end en cours. Nous soutenons le musée avec des guides touristiques et des bénévoles. Notre station Club Ham est disponible.",
        contact: {
          email: "contact@k3nem.org",
          web: "www.k3nem.org/"
        }
      },
    ]
  },
  {
    title: "Tension et courant",
    info: [{ id: 1, text: "" }],
    description: [
      "La tension est un peu comme la pression électrique. Un courant est un flux de charge électrique. Il est préférable de le penser comme ceci: la tension provoque un courant électrique, tout comme la pression de l'eau provoque l'écoulement de l'eau.",

      "La tension est l'énergie invisible qui exhorte l'électricité à se déplacer d'un endroit à un autre. La tension et le courant fonctionnent main dans la main. La tension fournit la poussée, tandis que le courant maintient l'électricité qui coule. Ensemble, ils créent l'énergie qui alimente nos gadgets et illumine notre monde.",
    ],
    impact:
      "La compréhension de la tension et du courant aide les ingénieurs et les scientifiques à concevoir des systèmes électriques plus sûrs et plus efficaces. Des plus petits circuits aux plus grands réseaux électriques, ces concepts sont cruciaux pour créer une technologie qui fonctionne de manière fiable et en toute sécurité.",
    directions: {
      title: "Comment ça marche",
      steps: [
        { id: 1, step: "Tournez le bouton dans le sens des aiguilles d'une montre et regardez les mètres." },
        {
          id: 2,
          step: "Retournez l'interrupteur et allumez l'ampoule tout en regardant les compteurs.",
        },
        { id: 3, step: "Faites pivoter le bouton pour changer la tension." },
      ],
    },
    watch:
      "Le tour du bouton permet de changer la tension comme le montre le voltmètre. Le compteur reste immobile parce qu'aucun courant n'est utilisé jusqu'à ce que vous retourniez l'interrupteur. Lorsque vous retournez l'interrupteur, l'amètre montre le courant dessiné par l'ampoule lorsque vous tournez le bouton. La quantité de courant dessinée varie, modifiant la luminosité de l'ampoule.",
    how: "En retournant l'interrupteur, vous fermez le circuit et laissez le courant s'écouler dans le chemin du circuit. Sans la force de la tension et le chemin d'un circuit, le courant ne coule pas. La tension pousse le courant, le forçant à circuler à travers un circuit fermé et allumer l'ampoule.",
  },
  {
    title: "Le détecteur magnétique marconi",
    info: [
      {
        id: 1,
        title: "Inventeur:",
        text: "Guglielmo Marconi"
      },
      {
        id: 2,
        title: "Année d'invention:",
        text: "1896",
      },
      {
        id: 3,
        title: "Caractéristique clé:",
        text: "Capteur de champ magnétique"
      },
      {
        id: 4,
        title: "Impact:",
        text: "Fondation pour la technologie sans fil moderne"
      }
    ],
    description: [
      "À la fin du 19e siècle, un jeune inventeur nommé Guglielmo Marconi a développé le détecteur magnétique Marconi, un appareil qui pourrait détecter les champs magnétiques dans les ondes radio. Ce sont des signaux invisibles qui rendent la communication sans fil possible. Ces signaux pourraient être transmis de longues distances sans fils et reçus et sont devenus le point de départ de la communication sans fil.",
    ],

    impact:
      "Le détecteur magnétique Marconi est un élément de construction critique qui a commencé le voyage vers la connectivité mondiale. Cette invention a changé le jeu de la communication, façonnant notre monde moderne. Cette découverte a jeté les bases de futures innovations sans fil comme les radios, les téléviseurs, Internet, les smartphones et le Wi-Fi.",
    timeline: {
      title: "Histoire de la communication sans fil",

      dates: [
        { id: 1, date: "1890", text: "Première communication sans fil" },

        { id: 2, date: "1900", text: "Première diffusion radio" },

        { id: 3, date: "1920", text: "Première radio commerciale" },

        {
          id: 4,
          date: "1930 S.", text: "Technologie radar, diffusion télévisée",
        },

        { id: 5, date: "1940", text: "Services radio de qualité" },

        { id: 6, date: "1950", text: "Premiers satellites, le programme spatial" },

        { id: 7, date: "1970", text: "Réseaux mobiles, GPS" },

        { id: 8, date: "1980", text: "Réseaux mobiles de première génération" },

        {
          id: 9,
          date: "1990 S.", text: "Réseaux mobiles de deuxième génération, Wi-Fi",
        },

        { id: 10, date: "2000", text: "Internet satellite, réseaux 3G" },

        { id: 11, date: "2010", text: "LTE Advanced, réseau 5G" },
      ],
    },
    directions: {
      title: "Comment ça marche",
      steps: [
        { id: 1, step: "Écoutez sur le récepteur téléphonique." },
        {
          id: 2,
          step: "Tournez lentement le bouton sur le sens des aiguilles d'une montre.",
        },
        {
          id: 3,
          step: "La station de radio n'est détectée que lorsque la bande de fil se déplace. Il s'arrête lorsque la bande de fil s'arrête.",
        },
        {
          id: 4,
          step: "Voyez à quel point vous pouvez tourner le bouton et entendre toujours la radio.",
        },
      ],
    },
    watch: "",
    how: "Maggie ”déplace la bande de fil de fer à travers la bobine de radiofréquence lorsque vous tournez le bouton. Le détecteur fonctionne en capturant des ondes radio, qui sont des signaux invisibles voyageant dans l'air. Ce dispositif a utilisé un champ magnétique pour intercepter ces ondes. Permettre aux gens d'entendre les messages transportés par les ondes radio. Les circuits qui interprètent ce changement pour générer une sortie perceptible, généralement un signal audible.",
  },

  {
    title: "L'expérience de Faraday: électricité et magnétisme",
    info: [
      {
        id: 1,
        title: "Inventeur:",
        text: "Michael Faraday",
      },
      {
        id: 2,
        title: "Année d'invention:",
        text: "1831",
      },
      {
        id: 3,
        title: "Caractéristique clé:",
        text: "Relation entre l'électricité et le magnétisme",
      },
      {
        id: 4,
        title: "Impact:",
        text: "Fondation pour les sources d'alimentation électrique modernes",
      },
    ],
    description: [
      "Michael Faraday, un scientifique du 19e siècle, a fait des découvertes a changé notre façon de comprendre l'électricité et le magnétisme.",

      "Faraday a mené une expérience révolutionnaire en 1831 qui a montré comment l'électricité et le magnétisme sont connectés. Il a découvert que lorsqu'un aimant se déplace près d'un fil, il crée un courant électrique. Cette découverte a jeté les bases de la technologie moderne que nous utilisons aujourd'hui.",

      "Lorsque Michael Faraday a fait sa découverte d'une induction électromagnétique, il a émis l'hypothèse qu'un champ magnétique changeant est nécessaire pour induire un courant dans un circuit voisin. Pour tester son hypothèse, il a fait une bobine en enroulant un cylindre en papier avec du fil. Inclinez doucement le tube pour que l'aimant glisse dans le tube et voyez si vous pouvez générer un petit courant électrique.",

      "La force d'un électromêne dépend du nombre d'enroulements dans la bobine et de la force du courant électrique. Plus d'enroulements et un courant plus fort produisent des champs magnétiques plus intenses.",
    ],
    impact:
      "L'expérience de Faraday a été une étape cruciale dans la compréhension de la relation entre l'électricité et le magnétisme. Cette percée a conduit au développement de générateurs, qui produisent l'électricité qui alimente nos maisons, nos écoles et nos gadgets. Sans les découvertes de Faraday, de nombreux appareils électroniques sur lesquels nous comptons aujourd'hui pourraient ne pas exister.",
    directions: {
      title: "Essayez ceci:",
      steps: [
        {
          id: 1,
          step: "Inclinez doucement le tube pour que l'aimant glisse le long du tube.",
        },
        {
          id: 2,
          step: "Regardez le compteur montrer la présence de courant électrique lorsque l'aimant glisse devant la bobine de fil.",
        },
      ],
    },
    watch: "",
    how: "Ce phénomène se produit en raison de l'induction électromagnétique, un principe découvert par Faraday. Il démontre qu'un champ magnétique changeant induit un courant électrique dans un conducteur. Le facteur clé ici est le mouvement relatif entre l'aimant et le fil, ce qui fait changer le flux magnétique à travers la bobine.  Le flux magnétique est une mesure de l'amplitude d'un champ magnétique traversant une zone donnée.",
  },

  {
    title: "Expérience de Oersted",
    info: [
      {
        id: 1,
        title: "Découvreur:",
        text: "Hans Christian Oersted",
      },
      {
        id: 2,
        title: "Date de découverte:",
        text: "1820",
      },
      {
        id: 3,
        title: "Type d'expérience:",
        text: "Observer l'interaction entre l'électricité et le magnétisme.",
      },
      {
        id: 4,
        title: "Découverte clé:",
        text: "L'électricité coulant à travers un fil a provoqué un déplacement à proximité d'une boussole magnétique à proximité.",
      },
    ],
    description: [
      "Au début du XIXe siècle, Oersted s'est lancé dans une expérience qui changerait notre compréhension de la nature. La curiosité d'Oersted l'a conduit à une expérience extraordinaire. Avec une configuration simple, il a observé l'interaction entre l'électricité et le magnétisme. Il a remarqué que lorsqu'un courant électrique traversait un fil, une aiguille magnétique à proximité se déplaçait. Cette interaction inattendue entre l'électricité et le magnétisme était l'étincelle qui a illuminé une révolution de la science.",
    ],
    impact:
      "La découverte d'Oersted a été la clé qui a débloqué la mystérieuse relation entre l'électricité et le magnétisme. Cette révélation a jeté les bases du développement des moteurs électriques, des générateurs et de la technologie moderne sur laquelle nous comptons aujourd'hui.",
    directions: {
      title: "Comment ça marche",
      steps: [
        {
          id: 1,
          step: "Regardez la direction des boussoles; Ils pointent tous vers le nord.",
        },
        {
          id: 2,
          step: "Retournez l'interrupteur dans les deux sens.",
        },
        {
          id: 3,
          step: "Regardez les aiguilles de boussole se déplacer lorsque vous retournez l'interrupteur.",
        },
        {
          id: 4,
          step: "Ils montrent la direction du champ magnétique lorsque le courant est appliqué au fil de cuivre.",
        },
      ],
    },
    watch: "",
    how: "Une aiguille à boussole pointe vers une force magnétique et généralement vers le pôle magnétique nord de la Terre. Lorsque vous retournez l'interrupteur, vous permettez au courant de s'écouler dans une direction de la batterie. Le champ magnétique créé par le courant électrique à travers la bobine de fil enveloppée a créé son propre champ magnétique. Les aiguilles de boussole s'alignent avec le champ magnétique autour du fil. Lorsque vous retournez l'interrupteur dans l'autre sens, les aiguilles de boussole s'inversent car la direction du courant a été inversée.",
  },

  {
    title: "Avez-vous le pouvoir d'être un conducteur électrique?",
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
      "Lorsque vous placez une main sur la plaque de cuivre et l'autre main sur la plaque en aluminium, le courant circulait dans votre corps d'une plaque à l'autre.",
      " ",
      " ",
      " ",
    ],
    impact:
      "Nous pouvons créer de l'électricité par action chimique. En fermant les circuits, nous permettons à cette énergie de s'écouler. Vous avez fourni le fluide conducteur pour cette batterie, donc l'électricité vous traverse!",
    directions: {
      title: "Essayez ceci:",
      steps: [
        {
          id: 1,
          step: "Placer une main sur chaque plaque",
        },
        {
          id: 2,
          step: "Répétez avec un ami: Tiens la main, puis chaque personne place sa main libre sur l'une des assiettes. Essayez à nouveau avec plus de deux personnes «dans la boucle».",
        },
      ],
    },
    watch: "Regardez le compteur. Il montre un flux de courant constant dans une direction.",
    how: "Lorsque vous touchez les plaques métalliques, l'humidité sur vos mains agit comme les électrolytes salins de la batterie. Les électrolytes réagissent avec les plaques de cuivre et d'aluminium. Il éloigne les électrons chargés négativement de la plaque de cuivre, laissant les charges positives derrière. Il donne ensuite des électrons à la plaque en aluminium, ce qui le fait être chargé négativement. Ces électrons traversent le compteur à mesure qu'ils retournent sur la plaque de cuivre. Dans un circuit simple comme celui-ci, la direction du flux de courant est déterminée par la différence de potentiel entre les deux plaques. Lorsque vous touchez les deux plaques simultanément, vous complétez le circuit, permettant l'écoulement des électrons du potentiel plus élevé (plaque de cuivre) au potentiel inférieur (plaque en aluminium) à travers votre corps.",
  },

  {
    title: "Fils de saut",
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
      "Il y a longtemps, les scientifiques se sont interrogés sur les forces invisibles qui nous entourent. Une telle force, appelée électricité, les a fascinés. Ils ont découvert que cela pouvait faire bouger les choses et briller. Mais ils ne savaient pas comment le créer.",

      "Dans les années 1800, un brillant scientifique nommé Michael Faraday est devenu curieux de l'électricité et des aimants. Il a découvert quelque chose d'incroyable - lorsque les aimants se déplacent près d'un fil, ils créent de l'électricité. En utilisant la découverte de Faraday, les ingénieurs ont construit le premier générateur électrique. Imaginez une machine qui transforme la puissance des aimants en rotation en électricité. Cette invention a changé le monde pour toujours.",

      "",

      "",
    ],
    impact: [
      "Les expériences de Michael Faraday avec l'électromagnétisme l'ont amené à inventer le premier générateur électrique en 1831. En utilisant les principes démontrés ici, le générateur a converti l'énergie mécanique de la rotation en énergie électrique. La puissance du moteur dépend de la résistance du champ magnétique, du nombre de fils et de la quantité de courant parcourant les fils.",

      "La compréhension de l'électromagnétisme, la relation entre l'électricité et les aimants, a conduit à la création de centrales électriques. Ces plantes génèrent de l'électricité pour nos maisons, nos écoles et nos villes. Grâce à cette invention, nous pouvons éclairer nos maisons, alimenter nos gadgets et explorer des choses incroyables en utilisant l'électricité.",
    ],
    directions: {
      title: "Comment ça marche",
      steps: [
        {
          id: 1,
          step: "Bouton-poussoir 1",
        },
        {
          id: 2,
          step: "Bouton-poussoir 2",
        },
      ],
    },
    watch: "",
    how: "Notez que le fil entre deux aimants saute. Le fil se déplace parce que le champ magnétique créé par le courant électrique interagit avec le champ magnétique permanent.",
    what: {
      title: "Que se passe-t-il?",
      list: [
        {
          id: 1,
          info: "Mouvement de l'aimant: Dans l'expérience de Faraday, lorsqu'un aimant est déplacé vers l'intérieur et hors d'une bobine de fil (ou vice versa), il fait changer le champ magnétique autour de la bobine.",
        },
        {
          id: 2,
          info: "Courant induit: Ce changement dans le champ magnétique induit un débit d'électrons ou un courant électrique dans la bobine de fil.",
        },
        {
          id: 3,
          info: "Direction du courant: La direction du courant induit dépend de la direction de mouvement de l'aimant et de la bobine.",
          tilt: [
            "L'inclinaison vers la droite fait couler le courant induit dans une direction.",
            "L'inclinaison vers la gauche fait couler le courant induit dans la direction opposée.",
          ],
        },
        {
          id: 4,
          info: "Production d'électricité: le courant induit dans le fil peut être utilisé pour alimenter un circuit ou produire de l'électricité.",
        },
      ],
    },
  },

  {
    title: "Expérience d'échelle de Jacob: démontrer les principes électriques",
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
      "L'expérience d'échelle de Jacob est une démonstration du pouvoir de l'électricité pour créer des arcs de lumière fascinants. Il se compose de deux conducteurs verticaux, généralement fabriqués en tiges ou fils métalliques, placés en forme de V avec un petit écart entre eux en bas.",

      "",

      "",

      "",
    ],
    impact:
      "L'expérience d'échelle de Jacob n'est pas seulement un spectacle visuel fascinant, mais sert également de démonstration fondamentale des principes électriques. Il met en évidence le comportement de l'électricité dans l'air et les effets de la haute tension sur l'ionisation et la conductivité. Cette expérience a été cruciale pour faire progresser notre compréhension des phénomènes électriques et a ouvert la voie à de nombreuses innovations technologiques.",
    directions: {
      title: "Comment ça marche?",
      steps: [
        {
          id: 1,
          step: "Appuyez sur le bouton et maintenez-le.",
        },
        {
          id: 2,
          step: "Regardez les deux grands fils.",
        },
      ],
    },
    watch: "",
    how: "Lorsqu'une haute tension est appliquée aux deux conducteurs, l'électricité coule dans l'air dans l'espace entre elles, ionisant l'air et créant un chemin conducteur. La chaleur intense générée par cette décharge électrique fait se développer rapidement l'air, poussant l'arc vers le haut. Au fur et à mesure que l'arc grimpe, il se refroidit et l'air devient moins ionisé, brisant finalement le circuit et éteint l'arc. Le processus se répète, créant un affichage fascinant ressemblant à une échelle grimpant vers le haut.  Assister à la décharge d'arc et à la compréhension de ses principes sous-jacents fournit des informations précieuses sur le monde de la science et de l'ingénierie.",
  },

  {
    title: "Électricité statique: une découverte choquante",
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
      "L'électricité statique est une forme d'électricité de réception du déséquilibre entre les carrefours positifs et négatives avec un matériau qui se produit lorsque les électrons (les particules chargées négativement dans l'anatom) se déplacent d'un matériau à un autre. Si le matériau de réception d'électrons est isolé ou non un conducteur électrique, il a tendance à conserver les électrons, ce qui entraîne une charge d'offre d'électricité. Étant donné que cette charge ne bouge pas, elle est appelée électricité statique. Lorsque les conditions permettent à la charge accumulée de s'écouler, cette électricité statique est déchargée et elle devient la fréquence d'électricité.",
      "L'électricité statique est un phénomène qui se produit lorsque certains matériaux se frottent les uns contre les autres, ce qui fait que les électrons se déplacent d'une surface à l'autre. Ce mouvement crée un déséquilibre des charges électriques, conduisant à l'accumulation de l'électricité statique.",
      "Les orages sont des générateurs électriques de la nature, produisant d'immenses charges statiques alors que les gouttelettes d'eau et les particules de glace entrent en collision dans les nuages. Lorsque l'accumulation de l'électricité statique devient trop grande, elle cherche un chemin vers le sol, ce qui entraîne des coups de foudre. Ces boulons d'électricité peuvent atteindre des températures plus chaudes que la surface du soleil et libérer la puissance destructrice sur tout sur leur chemin.",
      "",
    ],
    impact: [
      "La découverte de l'électricité statique a eu un impact profond sur la technologie et la vie quotidienne. De l'invention du télégraphe au développement de l'électronique moderne, l'électricité statique joue un rôle crucial dans l'alimentation de nos appareils et la facilitation de la communication.",

      "Au XVIIIe siècle, Benjamin Franklin a mené son expérience de cerf-volant, prouvant que la foudre est une forme d'électricité. Cette découverte révolutionnaire a conduit à l'invention de la paratonnerre - un appareil conçu pour protéger les bâtiments et les navires des coups de foudre en redirigeant en toute sécurité la charge électrique vers le sol. L'invention de Franklin a révolutionné notre compréhension de la foudre et a ouvert la voie à des systèmes de protection de la foudre moderne.",
    ],
    directions: {
      title: "Comment ça marche?",
      steps: [
        {
          id: 1,
          step: "Appuyez et maintenez le bouton",
        },
        {
          id: 2,
          step: "Regardez les étincelles électriques en haut",
        },
      ],
    },
    watch: "",
    how: "La machine sépare les charges positives et négatives pour créer beaucoup d'énergie potentielle. Finalement, une étincelle est libérée qui utilise presque toute l'énergie et équilibre les deux côtés.",
  },

  {
    title: "Expérience de polarisation",
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
      "Cette expérience montre comment les filtres permettent des ondes électromagnétiques oscillant dans une certaine direction pour passer tout en bloquant les autres, présentant les effets de la polarisation sur les ondes électromagnétiques.  Avec des lunettes de soleil polarisées, le filtre crée des ouvertures verticales pour la lumière. Seuls les rayons lumineux qui approchent de vos yeux verticalement peuvent passer à travers ces ouvertures. Les lentilles bloquent toutes les ondes lumineuses horizontales rebondissant sur un étang lisse ou un capot de voiture brillant, par exemple.  Il s'agit d'un concept similaire à la polarisation sur les ondes électromagnétiques.",
      "",
      "",
      "",
    ],
    impact:
      "La polarisation est ce qui permet à l'écran de maillage de votre porte de four à micro-ondes d'énergie dangereuse de s'échapper. Les fils du maillage sont des ondes de blocage verticales et horizontales se déplaçant dans les deux sens.",
    directions: {
      title: "Comment ça marche?",
      steps: [
        {
          id: 1,
          step: "Appuyez sur le bouton rouge.",
        },
        {
          id: 2,
          step: "Faites tourner lentement la roue d'écran tout en regardant les deux mètres. La corne gauche transmet et la corne droite reçoit.",
        },
      ],
    },
    watch: "",
    how: "Regardez les compteurs pour voir la quantité d'énergie électromagnétique en cours de transmission et la quantité reçue. Les montants changent-ils à mesure que la roue d'écran se déplace? L'écran de fil ouvert peut refléter ou transmettre des ondes électromagnétiques qui sont polarisées verticalement. Certaines vagues traversent les espaces entre les fils, tandis que d'autres vagues sont reflétées des fils. Pour les ondes polarisées verticalement, l'écran bloque le plus efficacement lorsque ses fils sont également verticaux.",
  },

  {
    title: "Pourquoi les micro-ondes ont-ils des platines?",
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
      "Les fours à micro-ondes génèrent des ondes électromagnétiques (micro-ondes) qui chauffent les aliments en excitant les molécules d'eau dans les aliments. Les micro-ondes sont invisibles, vous ne pouvez donc pas les voir dans un four à micro-ondes, mais leur présence peut être détectée avec des lampes néon. Le champ électromagnétique changeant des micro-ondes fera bouger les particules chargées, et donc les électrons dans les jambes métalliques déplaceront la création de courant. Ce courant fait briller les lampes.  La distribution de ces ondes à l'intérieur du micro-ondes a tendance à être inégale, donc une plaque tournante aide à faire pivoter les aliments, garantissant que toutes les parties du plat reçoivent une exposition relativement égale aux micro-ondes. Il en résulte une cuisine plus cohérente et même.",
    ],
    impact:
      "La nourriture dans le four absorbe l'énergie micro-ondes. La platine tourne les aliments à travers les intensités de champ élevés et bas. La cuisson approfondie est le résultat.",
    directions: {
      title: "Comment ça marche?",
      steps: [
        {
          id: 1,
          step: "Appuyez sur le bouton rouge à gauche du four à micro-ondes.",
        },
      ],
    },
    how: "Regardez les néons sur la platine à l'intérieur du micro-ondes. Ils s'allument et s'éteignent et changent de luminosité à mesure que leur position dans le four change.  Il s'agit d'une démonstration visuelle de l'incohérence de l'énergie micro-ondes. La distribution de l'énergie micro-ondes est incohérente. Cela provoque des intensités de champs variables, ou des taches chaudes et froides dans le four.  Une platine est utilisée pour réduire la probabilité de points chauds ou de points froids dans votre nourriture.",
  },

  {
    title: "Machine télégraphique - Connexion du monde",
    info: [
      {
        id: 1,
        title: "Nom:",
        text: "Machine télégraphique",
      },
      {
        id: 2,
        title: "Inventeur:",
        text: "Samuel Morse et Alfred Vail",
      },
      {
        id: 3,
        title: "Année d'invention:",
        text: "1837",
      },
      {
        id: 4,
        title: "Vitesse:",
        text: "Messages transmis en quelques secondes",
      },
      {
        id: 5,
        title: "Langue:",
        text: "Code Morse (points et tirets)",
      },
      {
        id: 6,
        title: "Connexion globale:",
        text: "Continents liés, modifiant la façon dont nous partageons les informations dans le monde entier",
      },
    ],
    description: [
      "Le télégraphe a transformé la communication en envoyant des messages à distance à travers les fils, en combler les écarts entre les personnes et les lieux. En utilisant le code Morse, une série de points et de tirets, le télégraphe a connecté le monde plus rapidement que jamais.",
      "",
      "",
      "",
    ],
    impact:
      "Avant le télégraphe, la communication était lente et les informations importantes sont souvent arrivées trop tard. Avec les fils télégraphiques qui s'étendent sur les continents, les nouvelles pourraient être livrées rapidement, ce qui était particulièrement important pour les entreprises, les gouvernements et les familles en attendant d'importantes mises à jour. Le télégraphe n'était pas seulement un appareil; C'était un pont entre les gens et les lieux. Il a joué un rôle important dans la construction du chemin de fer transcontinental. Sa capacité à transmettre des messages rapidement et avec précision sur de longues distances a joué un rôle vital dans la réussite de ce projet d'ingénierie monumentale, reliant les côtes est et ouest des États-Unis et facilitant la coordonnée du travail et des voyages à travers le pays.",
    directions: {
      title: "Comment ça marche?",
      steps: [
        {
          id: 1,
          step: "Appuyez sur le gros bouton noir sur la touche Telegraph.",
        },
        {
          id: 2,
          step: "Hold ensuite relâchez pour les tirets, appuyez et relâchez rapidement pour les points.",
        },
        {
          id: 3,
          step: "Écoutez le code du sondeur.",
        },
      ],
    },
    telegraphStation: {
      title: "Station télégraphique",
      instructions: [
        {
          id: 1,
          steps:"Appuyez sur le gros bouton noir sur la touche télégraphique"
        },
        {
          id: 2,
          steps:"Hold ensuite relâchez pour les tirets, appuyez et relâchez rapidement pour les points." 
        },
        {
          id: 3,
          steps: "Écoutez le code du sondeur."
        }
      ]
    },
    how: [
      "Les qualités magnétiques de l'électricité aident à envoyer le courant le long du fil télégraphique. Le code spécial des points et des tirets appelés «Morse Code» utilise des impulsions de courant pour envoyer des messages.",
      "C'était la première forme de communication à longue distance instantanée. Les messages peuvent être envoyés en appuyant un code spécial créé par Samuel Morse sur une clé télégraphique. Chaque lettre de l'alphabet a sa propre séquence spéciale de points et de tirets. Le nom Telegraph est dérivé du mot «télé» signifiant éloigné et du mot «graphique» signifiant écrire.",
      "",
    ],
  },
  {
    title: "Harrison Instruments 302 Theremin",
    info: [
      {
        id: 1,
        title: "Nom:",
        text: "Theremin",
      },
      {
        id: 2,
        title: "Inventé par:",
        text: "Leon Theremin",
      },
      {
        id: 3,
        title: "Année d'invention:",
        text: "1920",
      },
      {
        id: 4,
        title: "Taper:",
        text: "Instrument de musique électronique",
      },
      {
        id: 5,
        title: "Caractéristique notable:",
        text: "Joué sans contact physique",
      },
    ],
    description: ["Le Theremin est un instrument de musique unique, en ce qu'il est joué sans contact physique.  Le joueur se tient devant l'instrument et déplace ses mains près de ses deux antennes métalliques.  Le volume et la hauteur sont contrôlés par la distance des mains du joueur des antennes.  Le rapprochement d'une main de la plaque gauche augmente le volume.  En rapprocher la main de la plaque droite augmente le pas.  Les mains du joueur agissent comme la plaque à la terre d'un condensateur variable.", "", "", ""],
    impact: "Le Theremin témoigne de la fusion de l'art et de la science, offrant une interface unique où le son est produit sans aucun contact physique. Son invention a marqué un saut significatif dans l'évolution de la musique électronique, captivant le public avec ses tons étranges et d'un autre monde. De son utilisation précoce dans les compositions classiques à sa présence emblématique dans les bandes sonores de science-fiction, le Theremin a laissé une marque indélébile sur l'histoire de la musique. Son son étrange et de science-fiction a honoré d'innombrables films, ajoutant une atmosphère indubitable aux scènes de suspense et d'émerveillement.",
    directions: {
      title: "Comment ça marche?",
      description: "Passez à notre écran interactif.  Sentez la force invisible du champ électromagnétique lorsque vous manipulez les antennes de hauteur et de volume, créant vos propres mélodies dans l'air.  Pour jouer une note, positionnez votre main près de l'antenne de tangage (à droite), en ajustant la distance pour contrôler la fréquence de la hauteur.  Alors que votre main se rapproche de l'antenne, la hauteur monte; Inversement, déplacer la main abaisse le terrain.  Le volume (à gauche) est contrôlé de manière similaire, avec la proximité de l'antenne de volume déterminant l'intensité du son.",
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
    how: "Le Theremin fonctionne sur le principe de la capacité et la manipulation des champs électromagnétiques. Le Theremin se compose de deux antennes - l'une pour le tangage et l'autre pour le volume. Alors que le joueur se déplace près de ces antennes, le champ électromagnétique est perturbé, produisant des mélodies et des harmonies obsédantes. Son opération intuitive mais perplexe continue d'intriguer les musiciens et les passionnés.",
  },
  {
    title: "Première diffusion",
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
      title: "Comment ça marche?",
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
    title: "Turbine manuelle",
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
      title: "Comment ça marche?",
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
    title: "Theremin",
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
      title: "Comment ça marche?",
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
    title: "Ondes radio électromagnétiques",
    info: [
      {
        id: 1,
        title: "Nom:",
        text: "Ondes radio électromagnétiques",
      },
      {
        id: 2,
        title: "Découvert:",
        text: "À la fin du 19e siècle par Heinrich Hertz",
      },
      {
        id: 3,
        title: "Caractéristiques clés:",
        text: "Invisible, voyager à la vitesse de la lumière, utilisé dans les technologies de communication",
      },
      {
        id: 4,
        title: "Impact:",
        text: "Communication révolutionnée, activé les technologies sans fil",
      },
    ],
    description: [
      "Les ondes radio électromagnétiques sont la force invisible qui nous relie sur de vastes distances.  Comme une symphonie de fréquences, ces vagues transportent des informations, de la musique et des voix dans les airs, façonnant notre monde moderne d'une manière que nous tenons souvent pour acquise.",
      "À la fin du XIXe siècle, Heinrich Hertz a mené des expériences qui ont confirmé l'existence d'ondes électromagnétiques prédites par les équations de James Clerk Maxwell.  Le travail de Hertz a jeté les bases de notre compréhension des ondes radio et de leurs applications.",
      "",
      "",
    ],
    impact:
      "Au début, les ondes radio étaient principalement utilisées pour la télégraphie, permettant une communication longue distance via le code Morse.  Cependant, avec les progrès de la technologie, les ondes radio sont devenues l'épine dorsale des systèmes de communication modernes, facilitant la radiodiffusion, la transmission télévisée, et plus tard, Internet sans fil et réseaux cellulaires. Contrairement aux objets tangibles, les ondes radio sont invisibles à l'œil humain. Pourtant, ils imprègnent notre environnement, transportant des informations dans l'air sans effort. Que ce soit la musique en streaming depuis votre smartphone ou les signaux satellites guidant les avions, les ondes radio orchestrent silencieusement notre monde interconnecté.",
    directions: {
      title: "Comment ça marche?",
      steps: [
        {
          id: 1,
          step: "Génération: les ondes radio sont générées lorsqu'un courant alternatif traverse une antenne.  Ce courant alternatif crée des champs électriques et magnétiques oscillants autour de l'antenne, qui forment ensemble l'onde radio.",
        },
        {
          id: 2,
          step: "Propagation: Une fois généré, les ondes radio se déplacent dans l'air (ou d'autres médiums) à la vitesse de la lumière.  Ils se propagent dans toutes les directions, un peu comme les ondulations à la surface d'un étang lorsque vous laisse tomber une pierre.",
        },
        {
          id: 3,
          step: "Transmission: les ondes radio transportent de l'énergie et des informations à mesure qu'elles se propagent.  Par exemple, dans la radiodiffusion, un émetteur convertit les ondes sonores en signaux électriques, qui sont ensuite utilisés pour moduler les ondes radio.  Cette modulation code les informations sonores sur l'onde radio, ce qui lui permet de transporter de la musique, de la parole ou des données sur de longues distances.",
        },
        {
          id: 4,
          step: "Réception: Lorsque les ondes radio rencontrent une antenne réglée sur la même fréquence, elles induisent un petit courant alternatif dans l'antenne.  Ce courant est ensuite amplifié et décodé par des circuits électroniques dans un périphérique récepteur, comme une radio ou un smartphone.  Les informations originales codées sur l'onde radio sont reconstruites et diffusées sous forme de son, de données ou d'images.",
        },
        {
          id: 5,
          step: "Interférence et régulation: les ondes radio peuvent être affectées par divers facteurs, tels que les conditions atmosphériques, les interférences d'autres dispositifs électroniques ou les obstacles sur leur chemin.  Pour assurer une communication fiable, les fréquences radio sont soigneusement réglementées par les gouvernements et les organismes internationaux pour minimiser les interférences et allouer des bandes de fréquence spécifiques à différentes utilisations, telles que la radiodiffusion, l'aviation ou la communication mobile.",
        },
      ],
    },
    how: "Dans la communication électronique, la bande passante est la quantité d'informations transmises sur une onde électromagnétique.  Plus il y a d'informations dans une transmission, plus elle se propage de fréquences.  Étant donné que la fréquence d'un signal est mesurée dans Hertz (le nombre de cycles de changement par seconde), une bande passante est la différence de Hertz entre la fréquence la plus élevée et la fréquence la plus basse qu'il utilise.  La bande passante est intimement liée à l'efficacité, à la capacité et à la qualité des systèmes de communication à base d'ondes radio.  En gérant l'allocation de la bande passante et l'optimisation des paramètres de transmission, les ingénieurs peuvent concevoir des réseaux de communication qui offrent une connectivité fiable et à grande vitesse aux utilisateurs du monde entier. Quelque part au-dessus de vous en ce moment, un avion diffuse son emplacement, sa vitesse et sa roulement sur 1090 MHz.  Un satellite météorologique géostationnaire à 22 000 kilomètres de la Terre transmet des cartes météorologiques détaillées sur 1694,1 MHz.  Une voiture conduisant près de votre maison transmet un signal avec la lecture de la pression de l'un de ses pneus à 315 MHz.  Un satellite GPS volant au-dessus de 8 000 miles par heure fait un signal à votre téléphone à 1575,42 MHz.  Une bouée de données dans l'océan Atlantique transmet la température de la mer, la hauteur des vagues et les lectures de vitesse du vent dans un satellite NOAA à 401 MHz.  En plus de tout cela, chaque appareil mobile et routeur WiFi près de chez vous saute le trafic Internet de tout le monde dans les airs au-dessus des ondes radio.  Tous ces éléments peuvent se produire simultanément grâce à un spectre radio très soigneusement réglementé.  Les radiodiffuseurs agréés peuvent se voir attribuer des parties de la bande passante accessible au niveau régional afin que leurs signaux n'interfèrent pas les uns avec les autres. La Federal Communication Commission (FCC) et la National Telecommunications and Information Administration (NTIA) partagent la tâche de gérer l'attribution des fréquences radio pour les ondes américaines.  La NTIA gère les applications fédérales sur toutes les applications radio (y compris les utilisations militaires), tandis que la FCC gère tout le reste, y compris l'utilisation de la radio commerciale et locale, commerciale et amateur.",
  },
  {
    title: "Expérience de polarisation",
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
    description: ["Cette expérience montre comment les filtres permettent des ondes électromagnétiques oscillant dans une certaine direction pour passer tout en bloquant les autres, présentant les effets de la polarisation sur les ondes électromagnétiques.  Avec des lunettes de soleil polarisées, le filtre crée des ouvertures verticales pour la lumière. Seuls les rayons lumineux qui approchent de vos yeux verticalement peuvent passer à travers ces ouvertures. Les lentilles bloquent toutes les ondes lumineuses horizontales rebondissant sur un étang lisse ou un capot de voiture brillant, par exemple.  Il s'agit d'un concept similaire à la polarisation sur les ondes électromagnétiques.", "", "", ""],
    impact: "La polarisation est ce qui permet à l'écran de maillage de votre porte de four à micro-ondes d'énergie dangereuse de s'échapper. Les fils du maillage sont des ondes de blocage verticales et horizontales se déplaçant dans les deux sens.",
    directions: {
      title: "Comment ça marche?",
      steps: [
        {
          id: 1,
          step: "Appuyez sur le bouton rouge",
        },
        {
          id: 2,
          step: "Faites tourner lentement la roue d'écran tout en regardant les deux mètres. La corne gauche transmet et la corne droite reçoit.",
        },
      ],
    },
    watch: "Regardez les compteurs pour voir la quantité d'énergie électromagnétique en cours de transmission et la quantité reçue. Les montants changent-ils à mesure que la roue d'écran se déplace?",
    how: "L'écran de fil ouvert peut refléter ou transmettre des ondes électromagnétiques qui sont polarisées verticalement. Certaines vagues traversent les espaces entre les fils, tandis que d'autres vagues sont reflétées des fils. Pour les ondes polarisées verticalement, l'écran bloque le plus efficacement lorsque ses fils sont également verticaux.",
  },
  {
    title: "Tube à vide",
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
      title: "Comment ça marche?",
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
    how: "L'écran de fil ouvert peut refléter ou transmettre des ondes électromagnétiques qui sont polarisées verticalement. Certaines vagues traversent les espaces entre les fils, tandis que d'autres vagues sont reflétées des fils. Pour les ondes polarisées verticalement, l'écran bloque le plus efficacement lorsque ses fils sont également verticaux.",
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
      title: "Comment ça marche?",
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
      title: "Comment ça marche?",
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
      title: "Comment ça marche?",
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
      "Le générateur Van de Graaff: exploitant la puissance de l'électricité statique",
    info: [
      {
        id: 1,
        title: "Nom:",
        text: "Du générateur Graaff",
      },
      {
        id: 2,
        title: "Inventeur:",
        text: "Robert J. Van de Graaff",
      },
      {
        id: 3,
        title: "Année:",
        text: "1929",
      },
      {
        id: 4,
        title: "But:",
        text: "Démontrer l'électricité statique",
      },
      {
        id: 5,
        title: "Fait amusant:",
        text: "Le plus grand générateur de van de graaff peut faire des étincelles de foudre de plus de 20 pieds de long",
      },
      {
        id: 6,
        title: "Impact:",
        text: "Aidé à la recherche nucléaire et à la compréhension des structures atomiques.",
      },
    ],
    description: [
      "Le générateur Van de Graaff a été inventé par Robert J. Van de Graaff en 1929 pour montrer comment fonctionnent les charges électriques.  En utilisant une ceinture en mouvement pour construire de l'électricité sur le grand dôme métallique, il nous enseigne l'électricité statique - quelque chose qui nous entoure, mais nous ne le remarquons généralement pas.",
      "",
      "",
      "",
    ],
    impact:
      "Ce générateur aide les scientifiques à comprendre les forces qui gardent les atomes ensemble.  Il était autrefois utilisé dans les laboratoires pour accélérer les particules pour des expériences en physique nucléaire, nous aidant à en savoir plus sur l'univers et les éléments constitutifs de la matière. Machines à énergie supérieure - En 1937, la Westinghouse Electric Company a construit une machine de 65 pieds (20 m), le Westinghouse Atom Smasher capable de générer 5 MeV à Forest Hills, en Pennsylvanie.  Il a marqué le début de la recherche nucléaire pour les applications civiles.  Il a été mis hors service en 1958 et a été partiellement démoli en 2015.",
    directions: {
      title: "Comment ça marche?",
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
      title: "Comment ça marche?",
      info: [
        "Frottement sur la ceinture → Charges transférées au dôme → Charges sautent pour créer des étincelles.",
        "Le générateur Van de Graaff fonctionne en construisant et en stockant l'électricité statique, qu'elle transfère vers d'autres objets. Voici comment cela fait cela:",
      ],
      list: [
        {
          id: 1,
          item: "La ceinture.",
          description:
            "À l'intérieur de la machine, il y a une ceinture en caoutchouc ou en tissu qui se déplace en continu sur les rouleaux. Au fur et à mesure que la ceinture se déplace, elle se frotte contre les rouleaux, ramassant de minuscules charges électriques à travers un processus appelé frottement.",
        },
        {
          id: 2,
          item: "Le peigne.",
          description:
            "Au fur et à mesure que la ceinture se déplace, elle passe par un peigne (une bande métallique avec des points pointus) près de la base de la machine. Le peigne transfère les charges électriques de la courroie au dôme métallique en haut du générateur.",
        },
        {
          id: 3,
          item: "Le dôme.",
          description:
            "Le dôme est comme un conteneur géant pour les charges électriques. À mesure que les charges s'accumulent, le dôme devient très chargé. C'est une électricité statique, similaire à ce qui se passe lorsque vous frottez un ballon sur vos cheveux.",
        },
        {
          id: 4,
          item: "Des étincelles et statiques.",
          description:
            "Lorsque les charges sur le dôme s'accumulent suffisamment, ils recherchent un moyen de s'échapper.  Si vous apportez un objet métallique (ou même votre main) près du dôme, les charges sautent dans l'air, créant une étincelle visible.  Parfois, si vous touchez le dôme, les charges se déplacent à travers vous - en faisant la fin de vos cheveux.",
        },
      ],
    },
    try: {
      title: "Essayez ceci et regardez:",
      steps: [
        {
          id: 1,
          name: "Appuyez et maintenez le bouton pour l'allumer.",
          text: "Le générateur Van de Graaff et laissez-le accumuler la charge. Vous entendrez un faible bourdonnement, et après quelques instants, le dôme commencera à accumuler de l'électricité statique.",
        },
        {
          id: 2,
          name: "Assister à l'accusation.",
          text: "Regardez les étincelles zaps de la tige au dôme métallique. Les cheveux commenceront à augmenter à mesure que l'électricité statique s'écoule. L'électricité statique repousse chaque mèche de cheveux loin des autres, créant l'effet des «cheveux fous». Les lumières fluorescentes scintillent, chargant les ampoules.",
        },
      ],
    },
  },
  {
    title: "Le traducteur audio",
    info: [
      { 
        id: 1,
        title: "Impact:", 
        text: "Connecté 40 millions de ménages en 1930" 
      },
      { id: 2,
        title: "Reach global:", 
        text: "Couverture du réseau mobile à 95% (2023)" },
    ],
    description:
      ["Le traducteur audio, à ne pas confondre avec un traducteur de langue, est un appareil qui capture des sons distants, les transformant en signaux électriques. Cette percée a marqué une nouvelle ère en communication."],
    impact: [
      "Les traducteurs audio ont transformé les chuchotements distants en conversations mondiales. Ils ont façonné la communication moderne, unissant les gens dans le monde entier. Explorez le pouvoir de l'innovation et de la connexion dans notre histoire partagée.",

      "Alors que le téléphone, inventé à la fin du XIXe siècle, a révolutionné la communication directe entre les individus, elle était limitée par la nécessité d'une connexion physique via des fils ou des câbles. Il a facilité des conversations individuelles sur de longues distances mais n'a pas relevé le défi de capturer et de transmettre des sons ou des voix distants pour un public plus large. Le traducteur audio a permis la conversion des ondes sonores en signaux électriques, permettant la transmission de ces signaux sur de vastes distances sans dégradation. Cette technologie a facilité la diffusion des sons - music, des discours, des nouvelles - à un large public, surmontant les limites de la communication directe offerte par le téléphone. Il a permis des expériences partagées et des échanges culturels à l'échelle de masse, atteignant des millions de ménages dans le monde.",
    ],
    directions: {
      title: "Comment ça marche",
      steps: [
        {
          id: 1,
          step: "Appuyez sur le bouton pour l'allumer et attendez un moment pour qu'il se réchauffe.",
        },
        {
          id: 2,
          step: "Lorsque vous voyez la ligne verte à l'écran, parlez des trous à l'avant de l'étui.",
        },
        {
          id: 3,
          step: "Regardez comment la ligne verte de l'écran réagit au son de votre voix. Il convertit le son en un signal électrique.",
        },
      ],
    },
    how: "Un traducteur audio fonctionne en capturant des ondes sonores à travers un microphone ou un diaphragme sensible. Ces ondes sonores sont ensuite converties en signaux électriques. Cette transformation permet aux signaux d'être amplifiés, transmis et reproduits comme son à une fin de réception. Essentiellement, il convertit les informations audibles en impulsions électriques pour une transmission efficace sur les distances, garantissant que les sons d'origine restent intacts lorsqu'ils atteignent leur destination.",
  },
  {
    title: "Introduction aux ondes électromagnétiques",
    description: "Bienvenue, alors que nous voyageons à travers les forces invisibles qui façonnent notre univers. Des ondes radio aux rayons gamma, les ondes électromagnétiques englobent un vaste spectre d'énergie qui imprègne tous les aspects de notre vie quotidienne.  Suivez alors que nous explorons leur impact profond sur la technologie, la communication et notre compréhension du cosmos.",
    categories: {
      title: "Catégories d'ondes électromagnétiques",
      waves: [
        {
          id: 1,
          title: "Ondes radio",
          description: [
            "Ces ondes ont les longueurs d'onde les plus longues et les fréquences les plus basses du spectre électromagnétique.",
            "Largement utilisé dans la communication, notamment la radiodiffusion, le Wi-Fi et les réseaux cellulaires."
          ]
        },
        {
          id: 2,
          title: "Micro-ondes",
          description: [
            "Avec des longueurs d'onde légèrement plus courtes que les ondes radio, les micro-ondes sont utilisées dans diverses applications telles que la cuisson, le radar et la communication par satellite."
          ]
        },
        {
          id: 3,
          title: "Lumière infrarouge",
          description: [
            "Au-delà de la lumière visible mais plus courte que les micro-ondes, les ondes infrarouges sont associées à la chaleur et sont utilisées dans la technologie de vision nocturne, les télécommandes et l'imagerie thermique."
          ]
        },
        {
          id: 4,
          title: "Lumière visible",
          description: [
            "Le seul segment du spectre électromagnétique visible à l'œil humain, la lumière visible englobe une gamme de couleurs du rouge au violet.",
            "Essentiel à la vision et utilisé dans les technologies optiques telles que les caméras, les télescopes et les lasers."
          ]
        },
        {
          id: 5,
          title: "Vagues ultraviolets (UV)",
          description: [
            "Au-delà de la lumière violette sur le spectre électromagnétique, les ondes UV ont des longueurs d'onde plus courtes et une énergie plus élevée.",
            "Utilisé dans la stérilisation, les lits de bronzage et les traitements médicaux, mais peut également endommager les tissus vivants."
          ]
        },
        {
          id: 6,
          title: "Rayons X",
          description: [
            "Ces ondes ont encore des longueurs d'onde encore plus courtes et une énergie plus élevée que les ondes UV.",
            "Précieux dans l'imagerie médicale, la numérisation de sécurité des aéroports et l'analyse des matériaux en raison de leur capacité à pénétrer des objets solides."
          ]
        },
        {
          id: 7,
          title: "Rayons gamma",
          description: [
            "Avec les longueurs d'onde les plus courtes et l'énergie la plus élevée dans le spectre électromagnétique, les rayons gamma sont émis par les matières radioactives et les événements cosmiques.",
            "Utilisé dans le traitement du cancer, la stérilisation et l'étude des phénomènes astrophysiques à haute énergie."
          ]
        },
      ]
    },
    ending: [
      "Lorsque vous explorez les catégories des ondes électromagnétiques, vous gagnerez une appréciation plus profonde pour la diversité et la signification de ces phénomènes.  Des applications pratiques de la technologie quotidienne aux idées profondes qu'elles fournissent sur la nature de l'univers, les ondes électromagnétiques continuent de façonner notre monde d'une manière à la fois vue et invisible.",
      "Portez une attention particulière à nos expositions sur les «ondes électromagnétiques visuelles» et les «ondes radio électromagnétiques» pour un aperçu supplémentaire de ces exemples d'ondes électromagnétiques."
    ]
  }
];

export default artifact;