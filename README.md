# V-SDGs

### The volunteers-matching project for UN SDGs

## Native Build
1. Install Dependencies
```shell
npm install
```

2. Run the application in local mode
```shell
npm run dev
```

3. 🎉 Success
   Open http://localhost:3000/ to see if it is working correctly.

## Dockerized build
1. Build 
```shell
docker build -t v-sdgs.fe .
```

2. Run Docker
```shell
docker run -idt -p 3000:3000 v-sdgs.fe:latest
```

3. 🎉 Success
   Open http://localhost:3000/ to see if it is working correctly.

## Configuration
* 如果你自己跑，必須把 .env 裡面的 `NEXT_PUBLIC_ENDPOINT` 改一下（http://localhost:8000/）
* 必須將.env中的API金鑰改為自己的，否則會Google Map無法正常顯示

## Online Demo
https://hackthon.sivir.pw