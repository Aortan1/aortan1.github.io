# Host: 127.0.0.1  (Version 5.6.32-log)
# Date: 2017-11-01 15:08:30
# Generator: MySQL-Front 5.3  (Build 8.7)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "feedback"
#

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `phone` varchar(32) NOT NULL DEFAULT '',
  `email` varchar(120) NOT NULL DEFAULT '',
  `comment` mediumtext,
  `alert_success` tinyint(1) NOT NULL DEFAULT '0',
  `alert_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
