import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div>
      <h1>Learn anything, anytime, anywhere</h1>
      <p>
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </p>
      <div>
        <button>Get started</button>
        <button>
          Learn more <img src={assets.arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
