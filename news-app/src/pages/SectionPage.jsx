import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

function SectionPage ({articles}){

    const { sectionName } = useParams()
    const [sectionArticles, setSectionArticles] = useState([])

    useEffect( () => {
        const filteredAtricles = articles.filter(article => article.section.toLowerCase() == sectionName.toLowerCase())

        setSectionArticles(filteredAtricles)
        
        console.log(filteredAtricles)
    }, [sectionName])
    

    return(
        <div>
        {sectionArticles 
        
            ? sectionArticles.map((article) => (
                <p key={article.id}> {article.title}  -- {article.section}</p>
            ))
            : 'no articles found'
        
        }
        </div>
    )
}

export default SectionPage