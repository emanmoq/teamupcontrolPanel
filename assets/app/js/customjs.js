$(document).ready(function () {

    $(".newAccounBtn").click(function(){
        $(".addNewAccountForm").slideDown(1000);
      });
      $(".newUserBtn").click(function(){
        $(".addNewUserForm").slideDown(1000);
      });
      $(".closeForm").click(function(){
        $(".addNewUserForm").slideUp(1000);
        $(".addNewAccountForm").slideUp(1000);
      })
});
