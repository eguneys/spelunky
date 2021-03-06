    // This music has been exported by SoundBox. You can use it with
    // http://sb.bitsnbites.eu/player-small.js in your own product.

    // See http://sb.bitsnbites.eu/demo.html for an example of how to
    // use it in a demo.

    // Song data
let template = n => ({
  songData: [
    { // Instrument 0
      i: [
        3, // OSC1_WAVEFORM
        255, // OSC1_VOL
        138, // OSC1_SEMI
        0, // OSC1_XENV
        0, // OSC2_WAVEFORM
        255, // OSC2_VOL
        115, // OSC2_SEMI
        0, // OSC2_DETUNE
        0, // OSC2_XENV
        15, // NOISE_VOL
        2, // ENV_ATTACK
        0, // ENV_SUSTAIN
        29, // ENV_RELEASE
        0, // ARP_CHORD
        0, // ARP_SPEED
        0, // LFO_WAVEFORM
        96, // LFO_AMT
        3, // LFO_FREQ
        1, // LFO_FX_FREQ
        3, // FX_FILTER
        64, // FX_FREQ
        44, // FX_RESONANCE
        3, // FX_DIST
        29, // FX_DRIVE
        0, // FX_PAN_AMT
        12, // FX_PAN_FREQ
        28, // FX_DELAY_AMT
        3 // FX_DELAY_TIME
      ],
      // Patterns
      p: [1],
      // Columns
      c: [
        {n: [n],
         f: [13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,77]}
      ]
    },
  ],
  rowLen: 5513,   // In sample lengths
  patternLen: 32,  // Rows per pattern
  endPattern: 0,  // End pattern
  numChannels: 1  // Number of channels
});

export default [template(139),
                template(152),
                template(156)];

