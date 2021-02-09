import superagent from 'superagent';
import cheerio from 'cheerio';

interface DataInfo {
    anchor: string,
    personNumber: string,
    liveTitle: string,
    avatar: string | undefined,
    cover: string | undefined,
}

interface RetrieveData {
    code: number,
    message: string,
    data: DataInfo[],
    currentTime: number,
}

export default class Crowller {
    private url = 'https://www.huya.com/g/3203'

    private async getRewHtml(): Promise<string> {
        const result = await superagent.get(this.url);
        return result.text;
    }

    /**
     * 这是用于获取虎牙直播页面的数据的 API
     * @param {string} html
     */
    private getLiveInfo(html: string): RetrieveData {
        const data: DataInfo[] = [];
        const $ = cheerio.load(html);
        const gameLiveItem = $('.game-live-item');
        gameLiveItem.each((index, element) => {
            data.push({
                anchor: $(element).find('.avatar').find('.nick').text(),
                personNumber: $(element).find('.num').find('.js-num').text(),
                liveTitle: $(element).find('.title').text(),
                avatar: $(element).find('.avatar').find('img').attr('data-original'),
                cover: $(element).find('.video-info ').find('img').attr('data-original'),
            });
        });
        return {
            code: 200,
            message: 'data acquisition is successful',
            data,
            currentTime: new Date().getTime(),
        };
    }

    private async initSpiderProcess(): Promise<RetrieveData> {
        const htmlText: string = await this.getRewHtml();
        return this.getLiveInfo(htmlText);
    }

    public static getData(): Promise<RetrieveData> {
        return new Crowller().initSpiderProcess();
    }

    private constructor() {
        this.initSpiderProcess().then();
    }
}

Crowller.getData().then((result) => {
    console.log(result);
});
