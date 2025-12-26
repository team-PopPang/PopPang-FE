const getlatestpops = async () => {
            const url = new URL(
                'http://poppang.co.kr:4003/api/v1/recommend/web');
            const response = await fetch(url);
            const data = await response.json()
            console.log("ssssss", data);
        };
        

        getlatestpops();