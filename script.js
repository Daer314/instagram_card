const input = document.getElementById('input');
const postButton = document.getElementById('button');
const ul = document.querySelector('ul')


function fetchData(){
    fetch('https://picsum.photos/v2/list?page=2&limit=100')
        .then(res => {
            if(!res.ok){
                throw Error('ERROR')
            }
            return res.json()
        })
        .then(data => {
            const wrapper = document.getElementById('wrapper')            
            
            const html = data.map(img => { 
                return img.download_url
            }).splice(0,4)

            html.map(url => {
                const img = document.createElement('img')
                img.appendChild(document.createTextNode('image1'))
                wrapper.appendChild(img)
                img.classList.add('swiper-slide')
                img.setAttribute('src', url)

                return  img
            })
        })
        .catch(error => console.log(error))
}

fetchData()

const likeButton = document.getElementById('like');

likeButton.addEventListener('click', function(){
    console.log('Holaaaaaaa')
})

const comment = document.getElementById('comment');

comment.addEventListener('click', function(){
    console.log('Holaaaaaaa')
})



postButton.addEventListener('click', function(){

    event.preventDefault()

    if(input.value.length > 0){

        const li = document.createElement('li')
        li.appendChild(document.createTextNode('Comment '))
        ul.appendChild(li)
        li.classList.add('bold')
        
        const span = document.createElement('span');
        span.appendChild(document.createTextNode(input.value))
        li.appendChild(span)
    }
})
