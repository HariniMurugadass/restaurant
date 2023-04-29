function validate()
      {

        var a=document.getElementById("pass1").value
        var b=document.getElementById("pass2").value

        if(a==b)
        {
          alert("click submit to continue")
          sub.disabled=false
        }

        else
        {
          alert("passwords don't match, please try again")
        }
        
      }