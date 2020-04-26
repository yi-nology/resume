import request from '../plugin/axios'

function getUri(): any {
    return '/v1/resume/'
}

export function getInfoByKeyword(data: any): any {
    return request({
        url: getUri()+'/getInfoByKeyword',
        method: 'get',
        params: data
    })
}

// export function getInfoByCode (data:any):any {
//     return request({
//         url:'/v1/resume/getInfoByCode',
//         method: 'get',
//         data
//     })
// }
// export function createKeyword (data:any):any {
//     return request({
//         url: '/v1/resume/createKeyword',
//         method: 'get',
//         data
//     })
// }
//
// export function updateUser (data:any):any {
//     return request({
//         url: '/updateUser',
//         method: 'get',
//         data
//     })
// }
//
// export function addUser (data:any):any {
//     return request({
//         url: '/addUser',
//         method: 'get',
//         data
//     })
// }
//
//
// export function addEvent (data:any):any {
//     return request({
//         url: '/addEvent',
//         method: 'get',
//         data
//     })
// }
//
// export function updateEvent (data:any):any {
//     return request({
//         url: '/updateEvent',
//         method: 'get',
//         data
//     })
// }
//
// export function delEvent (data:any):any {
//     return request({
//         url: '/delEvent',
//         method: 'get',
//         data
//     })
// }
//
// export function enbleEvent (data:any):any {
//     return request({
//         url: '/enbleEvent',
//         method: 'get',
//         data
//     })
// }
//
// export function addSkill (data:any):any {
//     return request({
//         url: '/addSkill',
//         method: 'get',
//         data
//     })
// }
//
// export function enableSkill (data:any):any {
//     return request({
//         url: '/enableSkill',
//         method: 'get',
//         data
//     })
// }
//
// export function delSkill (data:any):any {
//     return request({
//         url: '/delSkill',
//         method: 'get',
//         data
//     })
// }
//

export function createQrcode(data: any): any {
    return request({
        url: getUri() + 'createQrcode',
        method: 'post',
        data
    })
}

