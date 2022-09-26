import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { footer_layout } from "../../../Fakedata/uiData";

const GetTemplateSection = ({ type: section }) => {
  const autoDevisionCol = () => {
    let end = 0;
    let array = [];
    const maxItem = 8;
    const lenght = Math.ceil(section?.text_link.length / maxItem);
    for (let index = 0; index < lenght; index++) {
      end += maxItem;
      const list = section?.text_link?.slice(index * maxItem, end);
      array.push(
        <ul key={index}>
          {list.map((item, i) => {
            return (
              <li key={i}>
                <Link className="font-medium text-sm" to={item?.link}>{item?.text}</Link>
              </li>
            );
          })}
        </ul>
      );
    }
    return array;
  };

    switch (section.type.toString()) {
      case "0":
        return (
          <div className="mt-14">
            {section?.description && (
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: section.description }} />
            )}
          </div>
        );
      case "1":
        return (
          <div className="">
            {section?.text_link && (
              section?.text_link.map((item, i) => (
                <div key={i} className="mt-[60px]">
                  {section?.logo?.map((item, i) => 
                      <img key={i} src={item.image} alt="" />
                  )}
                  <p className="text-sm mt-3" key={i}  >{item.text}</p>
                </div>
              ))
            )}
          </div>
        );
      case "2":
        return (
          <div className="mt-2">
            {section?.text_link && (
              <div className="">
                 {section?.text_link.map((item, i) => 
                     <h3 className="text-13" key={i}>{item.text}</h3>
                  )}
              </div>
            )}
          </div>
        );
      case '3': 
        return (
          <div className="mt-8">
            {section?.text_link && (
              <div className="grid grid-cols-3 ">
                {section.text_link && autoDevisionCol()}
              </div>
            )}
          </div>
        );
      case '4':
        return (
          <div className="mt-1 text-sm">
            {section?.description && (
              <p dangerouslySetInnerHTML={{__html: section?.description}}></p>
            )}
            {section?.input.map((item, i) => (
              <div key={i} className="mt-6">
                <input type="text" className="bg-white border outline-none p-[15px_20px] w-[70%]" placeholder={item.placeholder}  />
              </div>
            ))}
            {section.socialMedial && 
              <ul  className="flex items-center">
                {section.socialMedial.map((item, i) => (
                  <li key={i} className="mr-4">
                    <a href={item.url} target="blank" rel="noreferrer noopener">
                      {item.image}
                    </a>
                  </li>
                ))}
              </ul>
            }
          </div>
        );
      default:
        break;
    }
};

const Footer = () => {
  return (
    <div>
      <Row>
        {footer_layout.map((item, i) => (
          <Col key={i}>
            <div className="bg-no-repeat bg-right h-full p-[30px]" style={{ backgroundImage: `url(${item.image.url})` }}>
              {item.section.map((section, i) => (
                <div key={i} >
                 {section.title && <div
                    className="footer_logo-text font-dragon text flex text-6xl font-medium relative items-center"
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />}
                  <GetTemplateSection type={section} />
                </div>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Footer;
