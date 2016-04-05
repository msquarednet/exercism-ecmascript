class Bob {
  hey(input) {

    const qstr = 'Sure.';
    const yellstr = 'Whoa, chill out!';
    const nostr = 'Fine. Be that way!';
    const whatstr = 'Whatever.'

    const isYelling = (input) 		=> input.toUpperCase()===input && input.toLowerCase()!==input;
    const isQuestioning = (input)	=> input.charAt(input.length-1)==='?';
    const isNothing = (input) 		=> input.trim()==='';

    //order matters...
    if (isYelling(input)) 		{return yellstr;}
    if (isQuestioning(input))	{return qstr;}
    if (isNothing(input)) 		{return nostr;}
    return whatstr;

  }
}

export default Bob;
