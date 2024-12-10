
let sun = document.getElementById('sun');
let clouds = [
    document.getElementById('cloud1'),
    document.getElementById('cloud2'),
    document.getElementById('cloud3'),
    document.getElementById('cloud4')
  ];
let ellipsanim = document.getElementById('ellips');
function startDayAnimation() {
  // արևի անիմացիան cy(շրջանի կենտրոնի y-կոորդինատը) 300(ցածր դիրքից) դեպի 200(ավելի բարձր դիրք):
  sun.innerHTML = `
    <animate 
      attributeName="cy"  
      from="300" 
      to="200" 
      dur="5s" 
      repeatCount="indefinite" 
    />
  `;
 // ամպերի անիմացիան
 
  clouds.forEach((cloud, index) => {
    const cloudx = index % 2 === 0 ? 800 : -800;//Զույգ ինդեքսավորված ամպերը շարժվում են դեպի աջ (+800):
                                                   //Կենտ ինդեքսավորված ամպերը շարժվում են դեպի ձախ (-800):
    cloud.innerHTML = `
      <animate 
        attributeName="cx" 
        from="${parseInt(cloud.getAttribute('cx'))}" 
        to="${parseInt(cloud.getAttribute('cx')) + cloudx}" 
        dur="10s" 
        repeatCount="indefinite" 
      />
    `;
  });
}

function startSunset() {
 // արևի մայր մտնելը y առանցքի ուղղությամբ
  sun.innerHTML = `
    <animate 
      attributeName="cy" 
      from="300" 
      to="500" 
      dur="10s" 
      fill="freeze" 
    />
    <animate 
      attributeName="opacity" 
      from="1" 
      to="0" 
      dur="10s" 
      fill="freeze" 
    />
  `;
  // արևի շողքը անցնում է
  ellipsanim.innerHTML = `
    <animate 
      attributeName="opacity" 
      from="0.5" 
      to="0" 
      dur="10s" 
      fill="freeze" 
    />
  `;
  // ամպերը մնում են իրենց դիրքում
  clouds.forEach((cloud) => {
    cloud.innerHTML = ''; 
  });
}