import Form from "./componentes/Form";
import Main from "./componentes/Main";
import Nav from "./componentes/Nav";
import useArticle from "./hooks/useArticle";



function App() {

  const { articles, articlesCount, articlesPending, handleToggleArticle, handleDeleteArticle, handleNewArticle, totalPrecio} = useArticle();

  return (
    <div className="h-full md:h-screen bg-[#a5b4fc]">
      <Nav/>

      <div className="flex flex-col md:flex-row">
        
        <Main articles={articles} onDeleteArticle={handleDeleteArticle} onToggleArticle={handleToggleArticle} totalPrecio={totalPrecio} />

        <Form onNewArticle={handleNewArticle}/>

      </div>

    </div>
  );
}

export default App;
