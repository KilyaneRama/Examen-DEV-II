// https://restcountries.eu/rest/v2/all 

class Land {
    constructor(data) {
        this.data = data;
    }
    get htmlString() {
        return `
        <article>
            <label>
                <h3>${this.data.name}</h3>
                <div class="flagWrapper">
                <img src=${this.data.flag} />
                </div>
                <input type="checkbox" />
                Already visited
            </label>
        </article>
      `;
    }
}

class Lands {
    constructor() {
        this.renderInThisElement = document.getElementById('results');
        this.getData();
    }
    renderResults(content) {
        this.renderInThisElement.innerHTML = content;
    }

    /* sortLandsByRegion(a, b) {
        if (a.region < b.region) return -1;
        if (a.region > b.region) return 1;
    }
 */
    async getData() {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        this.data = await response.json();
        /* data.sort(sortLandsByRegion);  --> IK HEB GEPROBEERD OM TE SORTEN*/
        this.render();
    }

    render() {
        let htmlString = '';
        const landsList = this.data.map(landData => {
            const land = new Land(landData);
            htmlString += land.htmlString;
            return land;
        });
        console.log(landsList);
        this.renderResults(htmlString);

    }
}

/* function updateDocument() {
    const count = document.getElementById('total');
    count.innerHTML += 1;
}

document.getElementsByName('checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', updateDocument);
}); --> IK HEB GERPROBEERD VOOR DE COUNT*/

new Lands();