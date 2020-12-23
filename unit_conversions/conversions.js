const energycomparisions = {
  'smallest physically possible energy (wavelength the size of the visible universe)': 1.602e-50,
  'a single electron Volt (eV)': 1.602e-19,
  'energy of a photon of green light': 3.973e-19,
  'mass energy equivalent of an electron': 8.1871e-14,
  'mass energy equivalent of a hydrogen atom': 1.5e-10,
  'approximate kinetic energy of a flying mosquito': 1.6e-7,
  'kinetic energy of a walking ant': 1.28e-5,
  'acoustic energy of a whisper': 1e-2,
  'lifting a bar of chocolate 1m': 0.981,
  'a single calorie': 4.19,
  'the nutritional energy of a peanut': 11.88,
  'the energy of an amateur punch': 40,
  'the kinetic energy of tennis ball at serve': 116,
  'the energy required to ascend a flight of stairs': 5520,
  'kinetic energy of Usain Bolt at top speed': 6192,
  'your daily nutritional energy intake': 40578,
  'the energy in an F1 grenade': 251000,
  'the average nutritional energy consumed in a week': 284046,
  'potential energy required to climb the Burj Khalifa staircase': 1.338e6,
  'energy required to run a marathon': 8.74e6,
  //'the energy of a kg of TNT': 4.2e6,
  'enough energy to get 1kg out of earths gravitational field': 6.24962e7,
  'yearly energy produced by the worlds largest nuclear powerplant': 7.965e9,
  'the energy released by the fission of 1g of Uranium': 8.2e10,
  'the daily energy emitted by the sun': 1.86e13,
  'the explosive energy of the little Boy nuclear bomb': 6e13,
  'released by a hurricane in one second': 62e14,
  'yearly energy consumption of the CERN particle accelerator': 4.68e15,
  'impact energy of the forming Meteor Crater, Arizona': 1e16,
  'solar energy hitting earth every second': 1.73e17,
  'the yearly wind energy production': 1.607e18,
  'the yearly nuclear energy production': 9.565e18,
  'US yearly energy production': 8.357e19,
  'Chinas yearly energy production': 1.074e20,
  'yearly global energy production': 5.369e20,
  'gravitational binding energy of the earth': 2.49e32,
  'energy released by the sun in a year': 1.21e34,
  'a weak supernova explosion': 1.5e44,
  'a strong supernova explosion': 1e46,
  "mass-energy equivalent of the galaxy's visible mass": 4e58,
  'estimated mass-energy equivalent of ALL OF the universe': 2e69
}//in J

const sizecomparisions = {
  'the size of a hydrogen atom': 2.5e-11,
  'the size of a virus': 2.5e-7,
  'the size of bacteria': 5e-6,
  "the thickness of a human hair": 8e-5,
  "the size of a milky way (candy bar)": 0.08,
  'the average penile length in the US': 0.1358,
  'the average penile length in India': 0.1371,
  'the average penile length in Germany': 0.1452,
  'the average penile length in Ecuador': 0.1761,
  'the width of an A4 paper': 0.21,
  'the length of an A4 paper': 0.297,
  'the average height in Netherlands': 1.84,
  'the average height in Germany': 1.8,
  'the average height in Canada': 1.78,
  'the average height in Japan': 1.72,
  'the average height in Vietnam': 1.68,
  'the length of a VW beatle': 4.08,
  'the average oak tree height': 20,
  'the height of Mount Everest': 8849,
  'the distance of a marathon run': 42200,
  'the distance from Berlin to Munich': 5.08e5,
  "the width of the Atlantic at it's widest point": 4.83e6,
  'the circumference of the earth': 40.075e6,
  'the distance to moon': 384.400e6,
  'the radius of the sun': 696.340e6,
  'the distance to mars': 1.2438e11,
  'the size of our solar system': 5.9e12,
  'one lightyear': 9.461e15,
  'the size of the milky way': 4.7e17,
}//in m 

const weightcomparisions = {
  'the mass of a graviton': 8.9e-59,
  'the mass equivalent of an electron volt (eV)': 1.8e-36,
  'the mass of a neutrino': 3.6e-36,
  'the mass of an electron': 9.11e-31,
  'the mass of a proton': 1.6726e-27,
  'the mass of a hydrogen atom': 1.6735e-27,
  'the mass of a water molecule': 3e-26,
  'the weight of a caffeine mollecule': 3.2e-25,
  'the mass of a virus': 1e-17,
  'an average human cell weight': 1e-12,
  'a grain of birch pollen': 8e-12,
  'the weight of a mosquito': 2.5e-6,
  'one carat': 2e-4,
  'one raisin': 5e-4,
  'the weight of a US dollar bill': 1e-3,
  'the weight of an adult mouse': 3e-2,
  'the weight of a major league baseball': 0.145,
  'the weight of an infants brain': 0.4,
  'the weight of a human brain': 1.35,
  'the weight of an IKEA Billy': 35.25,
  'the weight of bag of cement': 42,
  'the weight of a car': 1500,
  'the launch mass of the Space Shuttle': 2e6,
  'the weight of the Titanic': 5.2e7,
  'the weight of the great Pyramid of Giza': 6e9,
  'the total biomass of antarctic krill': 4e11,
  'a teaspoon of neutron star material': 5.5e12,
  'the global annual human carbon dioxide emission': 4e13,
  'the ammount of matter converted into energy by the sun every day': 3.715e14,
  'the ammount of carbon stored in the oceans': 3.8e16,
  'the mass of earths atmosphere': 5.1e18,
  'the mass of the moon': 7.3e22,
  'the mass of the earth': 6.0e24,
  'the mass of Uranus': 8.7e25,
  'the mass of Saturn': 5.7e26,
  'the mass of Jupiter': 1.9e27,
  'the mass of the sun': 2e30,
  'the supermassive black hole at the center of the Milky Way': 7.5e36,
  'the entire Milky Way galaxy': 1.2e42,
  'the Mass of the observable universe as estimated by NASA': 4.4506e52,
}//in m 


function initComparisions(comparisions, idsuffix) {
  tmpObj = {
    values: [],
    descriptions: [],
    input: document.getElementById("input" + idsuffix),
    output: document.getElementById("output" + idsuffix),
  }
  for (let [key, value] of Object.entries(comparisions)) {
    tmpObj.values.push(value)
    tmpObj.descriptions.push(key)
  }
  convert(tmpObj)
  console.log(comparisions);
  return tmpObj
}

//initialize the converters
var energies = initComparisions(energycomparisions, "energy")
var distances = initComparisions(sizecomparisions, "distance")
var masses = initComparisions(weightcomparisions, "mass")

function convert(compObject) {
  var energy = parseFloat(compObject.input.value)

  if (energy != 0 && !isNaN(energy)) {
    var compIndex = findClosest(energy, compObject.values) //find the index of the closest comparision
    var compe = compObject.values[compIndex]
    console.log(compe);

    var multiplier = energy / compe
    var prefix = ""
    if (multiplier == 0.5) {
      prefix = 'half '
    } else if (multiplier < 1 && multiplier > 0.0001) {
      prefix = (multiplier * 100).toPrecision(2) + '% of '
    } else if (multiplier >= 1e6) {
      prefix = (multiplier / 1e6).toPrecision(2) + ' million times '
    } else if (multiplier >= 1000) {
      prefix = (multiplier / 1000).toPrecision(2) + ' thousand times '
    } else {
      prefix = (multiplier).toPrecision(3) + ' times '
    }
    compObject.output.textContent = prefix + compObject.descriptions[compIndex]
    console.log('rounding error: ', ((0.01 - multiplier * compe / energy / 100)).toPrecision(3), '%');
  } else
    compObject.output.innerHTML = '&#8203;'
}

function findClosest(ref, values) {
  var index = getKindaClose(ref, values)
  var before = values[index]
  var after = values[index + 1]

  console.log('oder of magnitude difference (to smaller)', orderOfMagnitude(before / ref), '; to larger:', orderOfMagnitude(after / ref));
  if (Math.abs(orderOfMagnitude(before / ref)) >= Math.abs(orderOfMagnitude(after / ref)) || isNaN(orderOfMagnitude(before / ref))) {
    return index + 1;
  } else {
    return index;
  }
}

function orderOfMagnitude(inp) {
  return Math.round(Math.log10(inp));
}

function getKindaClose(ref, values) {
  for (var i = 0; i < values.length; i++) {
    if (values[i] > ref)
      return i - 1;
  }
  return values.length - 1;
}