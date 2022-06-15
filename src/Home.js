import useFetch from './useFetch';
import BlogList from './BlogList'

// execute json server: npx json-server --watch data/db.json --port 8000

const Home = () => {
    
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    
    
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
     );
}
 
export default Home;