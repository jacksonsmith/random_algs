class DisjoinSet {
    constructor(size) {
        this.dj = Array.from({ length: size }, (_, i) => i);
    }

    find(name) {
        if (this.dj[name] !== name)
            this.dj[name] = this.find(this.dj[name])
        return this.dj[name]
    }

    union(a,b) {
        this.dj[this.find(a)] = this.find(b)
    }
}