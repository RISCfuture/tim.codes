<template>
  <svg
    width="104px"
    height="94px"
    viewBox="0 0 104 94"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Briefcase</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <rect
        id="path-1"
        x="0"
        y="0"
        width="52"
        height="28"
      />
    </defs>
    <g
      id="Resume"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Briefcase"
        transform="translate(1.500000, -2.000000)"
      >
        <rect
          id="Body"
          stroke="#ffffff"
          stroke-width="4"
          x="0.5"
          y="26"
          width="100"
          height="68"
          rx="8"
        />
        <g
          id="Handle"
          transform="translate(23.500000, 0.000000)"
        >
          <mask
            id="mask-2"
            fill="white"
          >
            <use xlink:href="#path-1" />
          </mask>
          <g id="Mask" />
          <rect
            id="Outer-Edge"
            stroke="#ffffff"
            stroke-width="4"
            mask="url(#mask-2)"
            x="3"
            y="4"
            width="47"
            height="33"
            rx="14"
          />
          <rect
            id="Inner-Edge"
            stroke="#ffffff"
            stroke-width="4"
            mask="url(#mask-2)"
            x="10"
            y="12"
            width="33"
            height="33"
            rx="8"
          />
        </g>
        <path
          id="Crease"
          d="M0,51.5 C16.6666667,57.1666667 33.3333333,60 50,60 C66.6666667,60
                 83.3333333,57.1666667 100,51.5"
          stroke="#ffffff"
          stroke-width="4"
        />
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Resume extends Vue {

  }
</script>
