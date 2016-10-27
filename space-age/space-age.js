class SpaceAge{
  constructor(secs) {
    this.secs = secs;
    this.ratios = {
      Earth: 1,
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Mars: 1.8808158,
      Jupiter: 11.862615,
      Saturn: 29.447498,
      Uranus: 84.016846,
      Neptune: 164.79132
    };
    Object.keys(this.ratios).forEach( (planet) => {
      SpaceAge.prototype['on'+planet] = () => {
        return Math.round(this.secs*100/31557600 / this.ratios[planet])/100;
      }
    })
  }
  get seconds() {return this.secs;}
}

export default SpaceAge;