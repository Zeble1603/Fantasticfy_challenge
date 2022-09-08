import './Pagination.css'

export default function Pagination(props) {
    const {usersPerPage,totalUsers, paginate} = props
    const pageNumber = []

    //create the right number of pages in relation to the number of users
    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage);i++){
        pageNumber.push(i)
    }
    
    return (
        <div className="pagination">
            {pageNumber.map(number=>(
                <p onClick={()=> paginate(number)} key={number}>{number}</p>
            ))}
            
        </div>
    )
}
