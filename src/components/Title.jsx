function Title({title,value}) {
    return (
        <div className="divider mb-8 mt-4">{title}
            <button className="btn gap-2">
                <div className="badge badge-secondary">{value}</div>
            </button>
        </div>
    );
}

export default Title
