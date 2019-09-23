module.exports =function multiply(first_number, second_number) {
  let long_str, short_str;
  if(first_number.length>=second_number.length)
  {
   long_str=first_number;
   short_str=second_number;
  }
  else
  {
   long_str=second_number;
   short_str=first_number;
  }
  let massiv=[];
  for(i=0;i<(long_str.length+short_str.length);i++)
  {
    massiv[i]=0;
  }
  let mult_element=0;
  let k;
  for(let i=short_str.length-1;i>=0;i--)
  {     
    for(let j=long_str.length-1;j>=0;j--) 
                                      
    {    k=i+j+1;  
     mult_element=(+(short_str.charAt(i)))*(+(long_str.charAt(j)));
             if(mult_element<10)
            {
              massiv[k]=massiv[k]+mult_element;
                if(massiv[k]>9)
                  {
                   massiv[k]=massiv[k]%10;
                   if(massiv[k-1]=='*')
                     {
                       massiv[k-1]=0;
                       massiv[k-1]=massiv[k-1]+1;
                     } 
                     else{
                      massiv[k-1]=massiv[k-1]+1;}
                  }
            } 
            else {
                    massiv[k]=massiv[k]+(mult_element%10);
                    if(massiv[k-1]=='*')
                    {
                      massiv[k-1]=0;
                      massiv[k-1]=massiv[k-1]+((mult_element-mult_element%10)/10);
                    } 
                    else{
                       massiv[k-1]=massiv[k-1]+((mult_element-mult_element%10)/10);}
                   }
         for(let g=massiv.length;g>0;g--)
     {
              if(massiv[g]>9)
                {
                  let h1=massiv[g]; 
                  massiv[g]=(massiv[g]%10); 
                  let h=massiv[g-1];                                   
                  massiv[g-1]=massiv[g-1]+((h1-h1%10)/10);
                  
                }
               }
    }
  }
  for(let i=0;i<(massiv.length);i++)
  {
    if(massiv[i]==0)
    {
      massiv[i]='*';
    }
    else{break;}
  }
  let mult_str=massiv.join('');
   for(let i=0;i<(massiv.length);i++)
  {
  mult_str=mult_str.replace('*','');
}
  return mult_str;
}