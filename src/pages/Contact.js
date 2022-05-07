import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate = useNavigate();
  return (
    <div>

<h1>Contact Page</h1>

<p>
  Duo dolor sit erat eos ut dolore rebum ea magna, ea est et et diam.
  Voluptua voluptua et accusam stet dolor lorem lorem, clita justo dolor
  et sit justo, et eirmod diam est tempor justo lorem. Sea no et duo erat
  lorem clita erat eirmod amet, ea et erat consetetur sea ipsum at kasd
  ut. Lorem justo et lorem vero et lorem sit invidunt, sit stet diam
  dolores voluptua sadipscing magna eos ea. Et duo clita clita sed. Diam
  tempor diam sed sit eos, labore ea sed diam dolor stet, aliquyam est
  magna dolor stet sit. Erat stet diam dolor.
</p>

<p>
  Takimata dolores sit ea rebum at sed amet, aliquyam et erat tempor et
  sed ut lorem diam, amet no gubergren invidunt kasd. Sed sadipscing kasd
  et duo eos amet kasd ipsum magna, duo sea sit amet sed est est dolor
  rebum. Eirmod nonumy dolores ut diam lorem dolor dolor est dolore, kasd
  ea ipsum duo ipsum ut justo sit diam, dolores dolor gubergren duo ipsum
  aliquyam est duo. Diam rebum aliquyam clita ipsum takimata ea labore
  tempor stet. Duo stet.
</p>
{/* redirect */}
<button onClick={() => { navigate("/")}}>Go To Home Page</button>
      
    </div>
  )
}

export default Contact;
