/*

Looking at the test suite, we need to define a DNA class with one strand property
and a hammingDistance method.
- The strand1 property will be initialized inside the constructor
- The hammingDistance method takes the second strand or strand2
 - Both strands are compared character by character, while keeping the count of differences
 - At the end, we return the difference as a number from hammingDistance method

- There is not need to check for input validaty.
- if strands have unequal length, compare up to the shorter strand
- Export the DNA class from this file
*/

class DNA {
  constructor(strand1) {
    this.strand1 = strand1;
  }

  hammingDistance(strand2) {
    let minLength = Math.min(this.strand1.length, strand2.length);
    let difference = 0;

    for (let i = 0; i < minLength; i += 1) {
      let nucleotide1 = this.strand1[i];
      let nucleotide2 = strand2[i];

      if (nucleotide1 !== nucleotide2) {
        difference += 1;
      }
    }
    return difference;
  }
}

module.exports = DNA;