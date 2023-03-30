function Title({title,value}) {
    return (
        <div className="divider">{title}
            <button className="btn gap-2">
                <div className="badge badge-secondary">{value}</div>
            </button>
        </div>
    );
}

export default Title
