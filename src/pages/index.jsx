import Header from "components/Header";
import CatCard from "components/CatCard";
import { Link } from 'react-router-dom';

function Index() {
    return (
        <div>
        <Header />
      <main className='main-content'>
      <section className='cat-cards-container'>
        <Link to="/cute-cat">
          <CatCard name='Cute cat' 
            description='A cute cat.' 
            image='https://upload.wikimedia.org/wikipedia/commons/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg'/>
        </Link>
        <Link to="/stare-cat">
          <CatCard name='Stare cat' 
            description='A menacing cat waiting for the night.' 
            image='https://images.unsplash.com/photo-1609779361684-8196b3a0abf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwc2l0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
        </Link>
      </section>
      <section>
      </section>
      </main>
      <footer></footer>
      </div>
    );
}

export default Index;