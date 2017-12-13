RUN npn cache clean
RUN npn install
EXPOSE 4200
CMD ["npm","start"]
