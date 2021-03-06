class Repository {

    constructor(
        id, node_id, name, full_name, is_private, description, language, owner, stars, forks, clone_url
    ) {
        this.id = id;
        this.node_id = node_id;
        this.name = name;
        this.full_name = full_name;
        this.is_private = is_private;
        this.description = description;
        this.language = language;
        this.owner = owner;
        this.stars = stars;
        this.forks = forks;
        this.clone_url = clone_url;
    }
}

module.exports = Repository;