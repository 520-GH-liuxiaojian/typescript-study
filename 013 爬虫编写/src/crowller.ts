import superagent from 'superagent';

class Crowller {
    private url = 'https://www.huya.com/g/3203'

    private rawHtml = ''

    async getRewHtml() {
        const result = await superagent.get(this.url);
        this.rawHtml = result.text;
    }

    constructor() {
        this.getRewHtml();
    }
}

new Crowller();
