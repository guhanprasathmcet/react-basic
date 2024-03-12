 function PassingComponentsAsProp({children , component}){
return(
  <>
  <div>{component}</div>
  {children}
  </>
);
}

export default function Demo(){
    return(
       <PassingComponentsAsProp
       component={
        <Demo1 content="john cena" number="21" />
       }>
        <p>children props</p>
       </PassingComponentsAsProp>
    );

}
 function Demo1({ content , number }){
    return (
        <>
        <h1>{content}</h1>
        <h2>{number}</h2>
        </>
    );
}

//so from the above example if you want to pass the two children components to any component you must send a componet as a prop
//first normally demo1 compoent for content and number and we use PassingComponentsAsProp in demo we pass the demo1 component
//as a prop and inside that we use p tag and now the p tag act as a children and also we use pass the compoent as a prop in the
//component props and normally we get it as a prop and use it in an our PassingComponentsAsProp.