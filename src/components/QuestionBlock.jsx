const QuestionBlock = ({ question }) => {
  console.log(question);
  return (
    <button className='question-block'>
      <img src={question.image} alt={question.alt} />

      <h3>{question.text}</h3>

      <p className='photo-credit'>
        <span>Photo Credit: </span> <br />
        <a href={question.image} rel='noreferrer' target='_blank' >{question.credit}</a>
        <span> via </span>
        <a href='https://www.unsplash.com' rel='noreferrer' target='_blank'>Unsplash</a>
      </p>
    </button>
  );
};

export default QuestionBlock;
