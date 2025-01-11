interface LineBreakTextParameters {
    text: string,
    lineClassName: string,
    maxLinesNumber?: number
}

const LineBreakText = ({ text, lineClassName, maxLinesNumber }: LineBreakTextParameters) => {
    let lines = text.split('\n');

    if (maxLinesNumber) {
        lines = lines.slice(0, maxLinesNumber);
    }

    return (
        <>
            {lines.map((line) => (
                <p className={lineClassName}>{line}</p>
            ))}
        </>
    );
}

export default LineBreakText;