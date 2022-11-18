
export const Form = ({get}) => {
    function names(e) {
        e.preventDefault()
        get(e.target.nameFilm.value) 
    }
    return (
        <div>
            <form type="submit" onSubmit={names} action="">
                <label>
                    <input name='nameFilm' type="text" />
                </label>
                <button type="submit">Submit</button>      
            </form>
        </div>
    )
};