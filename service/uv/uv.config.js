self.__uv$config = {
    prefix: '/service/',
    bare:'https://ixl.brunys.site/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/service/uv/uv.handler.js',
    bundle: '/service/uv/uv.bundle.js',
    config: '/service/uv/uv.config.js',
    sw: '/service/uv/uv.sw.js',
};
