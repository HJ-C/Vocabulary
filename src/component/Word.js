export default function Word({word}){
    return(
        <tr>
        <td>
            <input type = "checkbox"></input>
        </td>
        <td>{word.eng}</td>
        <td>{word.kor}</td>
        <td>
            <button>뜻 보기</button>
            <button className="btn_del">삭제</button>
        </td>
    </tr>
    )
}