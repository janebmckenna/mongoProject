$(document).ready(function(){
    $('.sidenav').sidenav({edge:"right"});
    $('.collapsible').collapsible();
    $('.tooltip').tooltip('methodName');
    $('.tooltip').tooltip('methodName', paramName);
    $('.datepicker').datepicker({
      format: "dd mmmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n: {
        done: select
      }
    });
  });

