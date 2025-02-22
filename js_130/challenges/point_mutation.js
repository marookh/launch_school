class DNA {
  constructor(strand1) {
    this.strand1 = strand1;
  }

  hammingDistance(stand2) {
    let diffCount = 0;

    for (let idx = 0; idx < stand2.length; idx += 1) {
      if (this.strand1[idx] !== stand2[idx]) diffCount++;
    }

    return diffCount;

  }
}

module.exports = DNA;