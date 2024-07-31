
const solarSystemData = {
  sun: {
    name: 'sun',
    radiusRatio: 0.05,
    color: 'yellow',
    parent: null,
    facts: [
      "The Sun contains 99.86% of the mass in the Solar System",
      "Its surface temperature is about 5,505°C (10,000°F)",
      "It's about 4.6 billion years old"
    ],
    keyFeatures: [
      "Fusion reactor producing heat and light",
      "Solar wind and magnetic field influence entire solar system",
      "Composed mainly of hydrogen (74%) and helium (24%)"
    ]
  },
  mercury: {
    name: 'mercury',
    radiusRatio: 0.007,
    color: 'gray',
    orbitRadiusRatio: 0.15,
    orbitSpeed: 0.008,
    parent: 'sun',
    facts: [
      "Smallest planet in the Solar System",
      "Has no atmosphere and no moons",
      "Its day is about 59 Earth days long"
    ],
    keyFeatures: [
      "Heavily cratered surface",
      "Extreme temperature variations",
      "Contains water ice in permanently shadowed craters at its poles"
    ]
  },
  venus: {
    name: 'venus',
    radiusRatio: 0.014,
    color: 'orange',
    orbitRadiusRatio: 0.25,
    orbitSpeed: 0.006,
    parent: 'sun',
    facts: [
      "Hottest planet in the Solar System",
      "Rotates backwards compared to other planets",
      "Its day is longer than its year"
    ],
    keyFeatures: [
      "Thick atmosphere of mostly carbon dioxide",
      "Runaway greenhouse effect",
      "Surface pressure 90 times that of Earth"
    ]
  },
  earth: {
    name: 'earth',
    radiusRatio: 0.015,
    color: 'blue',
    orbitRadiusRatio: 0.35,
    orbitSpeed: 0.005,
    parent: 'sun',
    facts: [
      "Only known planet with life",
      "70% of surface covered by water",
      "Has one natural satellite: the Moon"
    ],
    keyFeatures: [
      "Nitrogen-oxygen atmosphere",
      "Magnetic field protects from solar radiation",
      "Active plate tectonics"
    ]
  },
  moon: {
    name: 'moon',
    radiusRatio: 0.008,
    color: 'lightgray',
    orbitRadiusRatio: 0.08,
    orbitSpeed: 0.02,
    parent: 'earth',
    facts: [
      "Fifth largest moon in the Solar System",
      "Only celestial body humans have walked on besides Earth",
      "Same side always faces Earth (tidally locked)"
    ],
    keyFeatures: [
      "Heavily cratered surface",
      "No atmosphere",
      "Presence of water ice at poles"
    ]
  },
  mars: {
    name: 'mars',
    radiusRatio: 0.012,
    color: 'red',
    orbitRadiusRatio: 0.45,
    orbitSpeed: 0.004,
    parent: 'sun',
    facts: [
      "Known as the 'Red Planet' due to iron oxide on its surface",
      "Has the largest volcano in the Solar System: Olympus Mons",
      "Has two small, irregularly shaped moons: Phobos and Deimos"
    ],
    keyFeatures: [
      "Thin atmosphere, mostly CO2",
      "Polar ice caps of water and dry ice",
      "Evidence of ancient river valleys and lake beds"
    ]
  },
  phobos: {
    name: 'phobos',
    radiusRatio: 0.0005,
    color: 'darkgray',
    orbitRadiusRatio: 0.02,
    orbitSpeed: 0.03,
    parent: 'mars',
    facts: [
      "Largest and innermost moon of Mars",
      "Heavily cratered and covered in regolith",
      "Orbits Mars three times a day"
    ],
    keyFeatures: [
      "Grooved surface",
      "Likely to be destroyed by tidal forces in 30-50 million years",
      "May be a captured asteroid"
    ]
  },
  deimos: {
    name: 'deimos',
    radiusRatio: 0.0003,
    color: 'gray',
    orbitRadiusRatio: 0.03,
    orbitSpeed: 0.025,
    parent: 'mars',
    facts: [
      "Smaller and outermost moon of Mars",
      "Named after the Greek mythological twin character Deimos",
      "Takes about 30 hours to orbit Mars"
    ],
    keyFeatures: [
      "Smooth surface compared to Phobos",
      "Likely composed of rock-rich material",
      "May be a captured asteroid"
    ]
  },
  jupiter: {
    name: 'jupiter',
    radiusRatio: 0.03,
    color: 'sandybrown',
    orbitRadiusRatio: 0.6,
    orbitSpeed: 0.002,
    parent: 'sun',
    facts: [
      "Largest planet in the Solar System",
      "Has a Great Red Spot, a giant storm raging for hundreds of years",
      "Has at least 79 moons"
    ],
    keyFeatures: [
      "Composed mainly of hydrogen and helium",
      "Strong magnetic field",
      "Faint ring system"
    ]
  },
  io: {
    name: 'io',
    radiusRatio: 0.007,
    color: 'yellow',
    orbitRadiusRatio: 0.05,
    orbitSpeed: 0.015,
    parent: 'jupiter',
    facts: [
      "Most volcanically active body in the Solar System",
      "Surface is constantly renewed by volcanic activity",
      "Has over 400 active volcanoes"
    ],
    keyFeatures: [
      "Sulfur dioxide snowfields",
      "Colorful surface due to various sulfur allotropes",
      "Influenced by Jupiter's strong magnetic field"
    ]
  },
  europa: {
    name: 'europa',
    radiusRatio: 0.006,
    color: 'white',
    orbitRadiusRatio: 0.07,
    orbitSpeed: 0.013,
    parent: 'jupiter',
    facts: [
      "Smoothest surface of any known solid object in the Solar System",
      "Believed to have an ocean of liquid water beneath its icy crust",
      "Potential candidate for extraterrestrial life"
    ],
    keyFeatures: [
      "Icy surface with distinctive linear cracks",
      "Thin oxygen atmosphere",
      "Induced magnetic field due to interaction with Jupiter"
    ]
  },
  ganymede: {
    name: 'ganymede',
    radiusRatio: 0.009,
    color: 'lightgray',
    orbitRadiusRatio: 0.09,
    orbitSpeed: 0.011,
    parent: 'jupiter',
    facts: [
      "Largest moon in the Solar System",
      "Only moon known to have its own magnetic field",
      "Larger than the planet Mercury"
    ],
    keyFeatures: [
      "Surface is a mix of two types of terrain: dark, cratered areas and lighter, grooved terrain",
      "Subsurface ocean of liquid water",
      "Thin oxygen atmosphere"
    ]
  },
  callisto: {
    name: 'callisto',
    radiusRatio: 0.008,
    color: 'darkgray',
    orbitRadiusRatio: 0.11,
    orbitSpeed: 0.009,
    parent: 'jupiter',
    facts: [
      "Most heavily cratered object in the Solar System",
      "May have a subsurface ocean",
      "Third-largest moon in the Solar System"
    ],
    keyFeatures: [
      "Ancient surface with no signs of recent geological activity",
      "Composed of rock and ice in roughly equal amounts",
      "Very thin atmosphere of carbon dioxide"
    ]
  },
  saturn: {
    name: 'saturn',
    radiusRatio: 0.025,
    color: 'goldenrod',
    orbitRadiusRatio: 0.75,
    orbitSpeed: 0.0015,
    parent: 'sun',
    facts: [
      "Known for its prominent ring system",
      "Least dense planet in the Solar System",
      "Has at least 82 moons"
    ],
    keyFeatures: [
      "Composed mainly of hydrogen and helium",
      "Complex system of rings made mostly of ice particles",
      "Hexagonal storm at north pole"
    ]
  },
  titan: {
    name: 'titan',
    radiusRatio: 0.009,
    color: 'orange',
    orbitRadiusRatio: 0.08,
    orbitSpeed: 0.01,
    parent: 'saturn',
    facts: [
      "Largest moon of Saturn and second-largest in the Solar System",
      "Only moon known to have dense atmosphere and liquid surface",
      "Surface has Earth-like features such as lakes, rivers, and seas"
    ],
    keyFeatures: [
      "Atmosphere is primarily nitrogen, like Earth's",
      "Surface lakes and seas are composed of liquid methane and ethane",
      "Potential candidate for hosting microbial life"
    ]
  },
  enceladus: {
    name: 'enceladus',
    radiusRatio: 0.003,
    color: 'white',
    orbitRadiusRatio: 0.05,
    orbitSpeed: 0.012,
    parent: 'saturn',
    facts: [
      "Has geysers that shoot water vapor and ice particles from its south pole",
      "Surface is the most reflective in the Solar System",
      "Potential candidate for hosting microbial life"
    ],
    keyFeatures: [
      "Subsurface ocean of liquid water",
      "Tiger stripe patterns at the south pole",
      "Contributes material to Saturn's E ring"
    ]
  },
  uranus: {
    name: 'uranus',
    radiusRatio: 0.02,
    color: 'lightblue',
    orbitRadiusRatio: 0.85,
    orbitSpeed: 0.001,
    parent: 'sun',
    facts: [
      "Tilted on its side with an axial tilt of 98 degrees",
      "First planet discovered using a telescope",
      "Has 27 known moons"
    ],
    keyFeatures: [
      "Composed mainly of ices: water, ammonia, and methane",
      "Faint ring system",
      "Extreme seasonal variations due to axial tilt"
    ]
  },
  titania: {
    name: 'titania',
    radiusRatio: 0.005,
    color: 'lightgray',
    orbitRadiusRatio: 0.06,
    orbitSpeed: 0.008,
    parent: 'uranus',
    facts: [
      "Largest moon of Uranus",
      "Named after the queen of the fairies in Shakespeare's 'A Midsummer Night's Dream'",
      "Surface shows evidence of past geological activity"
    ],
    keyFeatures: [
      "Composed of roughly equal amounts of ice and rock",
      "Surface has numerous impact craters and fault systems",
      "May have a subsurface ocean"
    ]
  },
  oberon: {
    name: 'oberon',
    radiusRatio: 0.0048,
    color: 'darkgray',
    orbitRadiusRatio: 0.07,
    orbitSpeed: 0.007,
    parent: 'uranus',
    facts: [
      "Outermost of Uranus's major moons",
      "Named after the king of the fairies in Shakespeare's 'A Midsummer Night's Dream'",
      "Oldest and most heavily cratered of Uranus's moons"
    ],
    keyFeatures: [
      "Surface is covered with numerous impact craters",
      "Composed of roughly equal amounts of ice and rock",
      "Has mysterious dark patches of unknown origin"
    ]
  },
  neptune: {
    name: 'neptune',
    radiusRatio: 0.019,
    color: 'blue',
    orbitRadiusRatio: 0.95,
    orbitSpeed: 0.0008,
    parent: 'sun',
    facts: [
      "Windiest planet in the Solar System",
      "Last of the gas giants",
      "Has 14 known moons"
    ],
    keyFeatures: [
      "Blue color due to methane in atmosphere",
      "Great Dark Spot, a storm similar to Jupiter's Great Red Spot",
      "Thin, faint ring system"
    ]
  },
  triton: {
    name: 'triton',
    radiusRatio: 0.006,
    color: 'pink',
    orbitRadiusRatio: 0.05,
    orbitSpeed: 0.009,
    parent: 'neptune',
    facts: [
      "Largest moon of Neptune",
      "Only large moon in the Solar System with a retrograde orbit",
      "Has active nitrogen geysers"
    ],
    keyFeatures: [
      "Surface composed mainly of nitrogen ice",
      "Thin atmosphere of nitrogen and methane",
      "Likely a captured Kuiper belt object"
    ]
  },
  pluto: {
    name: 'pluto',
    radiusRatio: 0.005,
    color: 'tan',
    orbitRadiusRatio: 1,
    orbitSpeed: 0.0006,
    parent: 'sun',
    facts: [
      "Reclassified as a dwarf planet in 2006",
      "Has five known moons, the largest being Charon",
      "Its orbit is highly elliptical and inclined"
    ],
    keyFeatures: [
      "Composed mainly of rock and ice",
      "Atmosphere expands and contracts as it moves closer to and farther from the Sun",
      "Has a heart-shaped glacier of nitrogen and methane ice"
    ]
  },
  charon: {
    name: 'charon',
    radiusRatio: 0.003,
    color: 'gray',
    orbitRadiusRatio: 0.02,
    orbitSpeed: 0.015,
    parent: 'pluto',
    facts: [
      "Largest of Pluto's moons",
      "Forms a binary system with Pluto due to its large size relative to Pluto",
      "Named after the ferryman of the dead in Greek mythology"
    ],
    keyFeatures: [
      "Tidally locked with Pluto",
      "Surface composed of water ice and rock",
      "Has a dark red polar region nicknamed 'Mordor Macula'"
    ]
  }
};

class CelestialBody {

  constructor(name, data, parent = null) {
    this.name = name;
    this.data = data;
    this.parent = parent;
    this.children = [];
    this.angle = 0;
    this.x = 0;
    this.y = 0;
  }

  update(minDimension) {
    if (this.parent) {
      const orbitRadius = minDimension * this.data.orbitRadiusRatio;
      this.x = this.parent.x + Math.cos(this.angle) * orbitRadius;
      this.y = this.parent.y + Math.sin(this.angle) * orbitRadius;
    }
    this.children.forEach(child => child.update(minDimension));
  }

  draw(ctx, minDimension, scale) {
    const radius = minDimension * this.data.radiusRatio * scale;
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = this.data.color;
    ctx.fill();
    this.children.forEach(child => child.draw(ctx, minDimension, scale));
  }

  drawOrbit(ctx, minDimension, scale) {
    if (this.parent) {
      const orbitRadius = minDimension * this.data.orbitRadiusRatio;
      ctx.beginPath();
      ctx.arc(this.parent.x, this.parent.y, orbitRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.stroke();
    }
    this.children.forEach(child => child.drawOrbit(ctx, minDimension, scale));
  }

  isPointInside(x, y, minDimension, scale) {
    const radius = minDimension * this.data.radiusRatio * scale;
    const dx = x - this.x;
    const dy = y - this.y;
    return dx * dx + dy * dy <= radius * radius;
  }
}

class Solarsystem {

  constructor(data) {
    this.data = data;
    this.bodies = {};
    this.canvas = document.getElementById('animationCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.scale = 1;
    this.offsetX = 0;
    this.offsetY = 0;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.isPaused = false;
    this.tooltip = document.getElementById('tooltip');
    this.dragHandle = document.getElementById('dragHandle');
    this.speedSlider = document.getElementById('speedSlider');
    this.speedValue = document.getElementById('speedValue');
    this.animationSpeed = 1;
    this.resizeCanvas();

    window.addEventListener('resize', () => this.resizeCanvas());
    this.canvas.addEventListener('wheel', (event) => this.handleZoom(event));
    this.canvas.addEventListener('mousedown', (event) => this.startDrag(event));
    this.canvas.addEventListener('mousemove', (event) => this.drag(event));
    this.canvas.addEventListener('mouseup', () => this.endDrag());
    this.canvas.addEventListener('mouseleave', () => this.endDrag());
    this.canvas.addEventListener('click', (event) => this.handleClick(event));
    this.speedSlider.addEventListener('input', () => this.updateSpeed());

    this.initializeCelestialBodies();
    this.initTooltipDrag();

    this.animate();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    if (this.bodies.sun) {
      this.initializeCelestialBodies();
    }
  }

  initializeCelestialBodies() {
    // First pass: create all bodies
    for (const [name, data] of Object.entries(this.data)) {
      this.bodies[name] = new CelestialBody(name, data);
    }

    // Second pass: set up parent-child relationships
    for (const [name, body] of Object.entries(this.bodies)) {
      const parentName = this.data[name].parent;
      if (parentName) {
        body.parent = this.bodies[parentName];
        body.parent.children.push(body);
      }
    }

    // Set sun's position to the center of the canvas
    this.bodies.sun.x = this.canvas.width / 2;
    this.bodies.sun.y = this.canvas.height / 2;
  }

  drawBackground() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    if (!this.isPaused) {
      const minDimension = Math.min(this.canvas.width, this.canvas.height);
      for (const body of Object.values(this.bodies)) {
        if (body.parent) {
          body.angle += body.data.orbitSpeed * this.animationSpeed;
        }
      }
      this.bodies.sun.update(minDimension);
    }
  }

  draw() {
    this.drawBackground();

    const minDimension = Math.min(this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.translate(this.canvas.width / 2 + this.offsetX, this.canvas.height / 2 + this.offsetY);
    this.ctx.scale(this.scale, this.scale);
    this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);

    this.bodies.sun.drawOrbit(this.ctx, minDimension, this.scale);
    this.bodies.sun.draw(this.ctx, minDimension, this.scale);

    this.ctx.restore();
  }

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }

  handleZoom(event) {
    event.preventDefault();
    const zoomIntensity = 0.1;
    const wheel = event.deltaY < 0 ? 1 : -1;
    this.scale += wheel * zoomIntensity;
    this.scale = Math.max(0.1, Math.min(5, this.scale)); // Limit zoom levels
  }

  startDrag(event) {
    this.isDragging = true;
    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
  }

  drag(event) {
    if (this.isDragging) {
      const deltaX = event.clientX - this.lastMouseX;
      const deltaY = event.clientY - this.lastMouseY;
      this.offsetX += deltaX;
      this.offsetY += deltaY;
      this.lastMouseX = event.clientX;
      this.lastMouseY = event.clientY;
    }
  }

  endDrag() {
    this.isDragging = false;
  }

  handleClick(event) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const minDimension = Math.min(this.canvas.width, this.canvas.height);

    for (const body of Object.values(this.bodies)) {
      const adjustedX = (x - this.canvas.width / 2 - this.offsetX) / this.scale + this.canvas.width / 2;
      const adjustedY = (y - this.canvas.height / 2 - this.offsetY) / this.scale + this.canvas.height / 2;

      if (body.isPointInside(adjustedX, adjustedY, minDimension, this.scale)) {
        this.showTooltip(body, x, y);
        return;
      }
    }

    this.hideTooltip();
  }

  showTooltip(body, x, y) {
    this.isPaused = true;
    const tooltipContent = `
      <h3>${body.data.name}</h3>
      <h4>Facts:</h4>
      <ul>
        ${body.data.facts.map(fact => `<li>${fact}</li>`).join('')}
      </ul>
      <h4>Key Features:</h4>
      <ul>
        ${body.data.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <button onclick="solarSystem.hideTooltip()">Close</button>
    `;
    this.tooltip.innerHTML = tooltipContent;
    this.tooltip.appendChild(this.dragHandle);
    this.tooltip.style.left = `${x + 10}px`;
    this.tooltip.style.top = `${y + 10}px`;
    this.tooltip.style.display = 'block';
  }

  hideTooltip() {
    this.isPaused = false;
    this.tooltip.style.display = 'none';
  }

  initTooltipDrag() {
    let isDragging = false;
    let startX, startY;

    this.dragHandle.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX - this.tooltip.offsetLeft;
      startY = e.clientY - this.tooltip.offsetTop;
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        this.tooltip.style.left = `${e.clientX - startX}px`;
        this.tooltip.style.top = `${e.clientY - startY}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }

  updateSpeed() {
    this.animationSpeed = this.speedSlider.value / 100;
    this.speedValue.textContent = `${this.speedSlider.value}%`;
  }
}

// Initialize the solar system with the data
const solarSystem = new Solarsystem(solarSystemData);
