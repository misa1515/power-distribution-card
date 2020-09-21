import { css } from 'lit-element';

export const styles = css`
  * {
    box-sizing: border-box;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 35%-0.5em 30%-1em 35%-0.5em;
    gap: 1em;
    margin: auto;
  }

  p {
    text-align: center;
    margin: 4px 0 4px 0;
  }

  .grid-header {
    visibility: hidden;
    grid-column-start: 1;
    grid-column-end: 4;
    height: 0;
  }

  .overview {
    grid-column: 2;
    grid-row-start: 2;
    grid-row-end: 4;
  }

  .bar-container {
    display: block;
    width: 100%;
    height: 50%;
    position: relative;
  }

  .bar-container > div {
    display: inline-block;
    width: 45%;
    vertical-align: middle;
  }

  .bar {
    position: absolute;
    bottom: 0px;
  }

  badge {
    width: 50%;
    border: gray 1px solid;
    border-radius: 1em;
    float: left;
    padding: 4px;
  }

  badge > icon {
    width: 100%;
    display: inline-block;
  }

  icon > ha-icon {
    display: block;
    width: 24px;
    margin: 0 auto;
  }

  value {
    float: right;
  }

  item:nth-child(2n) > badge {
    float: right;
  }

  item:nth-child(2n) > value {
    float: left;
  }

  /**************
ARROW ANIMATION
**************/
  .arrow > div {
    display: inline-block;
  }

  .blank {
    height: 4px;
    width: 54px;
    background-color: #e3e3e3;
    margin: 8px auto 8px auto;
  }

  .triangle-right {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 17px solid #e3e3e3;
    border-bottom: 8px solid transparent;
  }

  .triangle-left {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 17px solid #e3e3e3;
    border-bottom: 8px solid transparent;
  }

  @keyframes flash_triangles {
    0%,
    66% {
      border-left-color: #e3e3e3;
      border-right-color: #e3e3e3;
    }
    33% {
      border-left-color: #555;
      border-right-color: #555;
    }
  }
  #arrow_1 {
    animation: flash_triangles 3s infinite steps(1);
  }

  #arrow_2 {
    animation: flash_triangles 3s infinite 1s steps(1);
  }

  #arrow_3 {
    animation: flash_triangles 3s infinite 2s steps(1);
  }
`;

export default styles;