interface Props {
    content: string;
}

const Text = (text: Props) => {
    
    return (
        <p>{text.content}</p>
      )
}

export default Text