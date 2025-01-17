interface CustomerPersonalCommentParameters {
    comment: string,
}

const CustomerPersonalComment = ({ comment }: CustomerPersonalCommentParameters) => {
    return (
        <p className="text-sm text-gray-600 whitespace-pre-line">{comment}</p>
    );
}

export default CustomerPersonalComment;