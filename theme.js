var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

// Immediately-invoked function expression
(function() {
  // Load the script
  const script = document.createElement("script");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
  script.type = 'text/javascript';
  script.addEventListener('load', () => {
   $('#jenkins-head-icon').ready(function() {
       $('#jenkins-head-icon').attr('src', 'https://design.jboss.org/strimzi/logo/final/strimzilogomark_default_512px.png')
   });
   $('#jenkins-name-icon').ready(function() {
       $('#jenkins-name-icon').attr('src', 'https://github.com/im-konge/jenkins-theme/raw/main/coollogo_com-254835774.png')
   });
  });
  document.head.appendChild(script);
})();